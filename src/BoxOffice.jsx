import './BoxOffice.css'
import { useState, useEffect } from 'react';
import BoxOfficeCard from './BoxOfficeCard';

const apiOptions = {
    method: 'GET', 
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk' 
    }
};

function BoxOffice() {
    const[boxOfficeMovies, setBoxOfficeMovies] = useState([]);
    const[movieRevenue, setMovieRevenue] = useState([{}]);

    useEffect(() => {
        async function fetchPopularMovies() {
            const getPopularMovies = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', apiOptions)
            .catch(err => console.log(err))
            const popularMoviesJson = await getPopularMovies.json();
            const allPopularMovies = popularMoviesJson;
            setBoxOfficeMovies(allPopularMovies.results);
        }
        fetchPopularMovies();
    }, [])

    useEffect(() => {
        if(boxOfficeMovies.length != 0) {
            async function fetchRevenue(id) { 
                const getRevenue = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=c941b11654acfc810e9b2f4d84200b83`)
                .catch(err => console.log(err))
                const revenueJson = await getRevenue.json();
                const allRevenue = revenueJson;
                setMovieRevenue((curr) => [
                    ...curr, allRevenue
                ])
            }

            async function makeRevenue() {
                return await Promise.all(boxOfficeMovies.map(m => fetchRevenue(m.id)));
            }

            makeRevenue();
        }
    }, [boxOfficeMovies])

    const boxOfficeData = [
        { title: 'Beekeeper', revenue: 8.5 },
        { title: 'Mean Girls', revenue: 12 },
        { title: 'Wonka', revenue: 6.5 },
        { title: 'Anyone But You', revenue: 5.4 },
        { title: 'Migration', revenue: 5.3 },
        { title: 'Aquaman and the Lost Kingdom', revenue: 3.7 }
    ];

    if(!movieRevenue || movieRevenue.length === 0 ) {
        return null 
    } else {
        <div className='boxOfficeContainer'>
            <div className='boxOfficeHeading'>Explore Movies and TV Shows</div>
            <div className='boxOfficeSubheading'>Top box office US</div>
            <div className='boxOfficeCardContainer'>
                <div className="boxOfficeCardContentLeft">
                    <BoxOfficeCard title={movieRevenue[1].original_title} revenue={movieRevenue[1].revenue} />
                    <BoxOfficeCard title={movieRevenue[2].original_title} revenue={movieRevenue[2].revenue} />
                    <BoxOfficeCard title={movieRevenue[3].original_title} revenue={movieRevenue[3].revenue} />
                </div>
                <div className='boxOfficeCardContentRight'>
                    <BoxOfficeCard title={movieRevenue[4].original_title} revenue={movieRevenue[4].revenue} />
                    <BoxOfficeCard title={movieRevenue[5].original_title} revenue={movieRevenue[5].revenue} />
                    <BoxOfficeCard title={movieRevenue[6].original_title} revenue={movieRevenue[6].revenue} />
                </div>
            </div>
        </div>
    }

    /* if(!movieRevenue || movieRevenue.length === 0) {
        return null
    } else {
        return (
            
        )
    }  */

}
export default BoxOffice;