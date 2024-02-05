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
    const[movieRevenue, setMovieRevenue] = useState([]);

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
                return allRevenue;
                /* setMovieRevenue((curr) => [
                    ...curr, allRevenue
                ]) */
            }

            async function makeRevenue() {
                setMovieRevenue(await Promise.all(boxOfficeMovies.map(m => fetchRevenue(m.id))));
            }

            makeRevenue();
        }
    }, [boxOfficeMovies])

    if(movieRevenue.length === 0 ) {
        return null 
    } else {
       return(
           <div className='boxOfficeContainer'>
               <div className='boxOfficeHeading'>Explore Movies and TV Shows</div>
               <div className='boxOfficeSubheading'>Top box office US</div>
               <div className='boxOfficeCardContainer'>
                   <div className="boxOfficeCardContentLeft">
                       <BoxOfficeCard title={movieRevenue[1].original_title} revenue={movieRevenue[1].revenue} number={1}/>
                       <BoxOfficeCard title={movieRevenue[2].original_title} revenue={movieRevenue[2].revenue} number={2}/>
                       <BoxOfficeCard title={movieRevenue[3].original_title} revenue={movieRevenue[3].revenue} number={3}/>
                   </div>
                   <div className='boxOfficeCardContentRight'>
                       <BoxOfficeCard title={movieRevenue[4].original_title} revenue={movieRevenue[4].revenue} number={4}/>
                       <BoxOfficeCard title={movieRevenue[5].original_title} revenue={movieRevenue[5].revenue} number={5}/>
                       <BoxOfficeCard title={movieRevenue[6].original_title} revenue={movieRevenue[6].revenue} number={6}/>
                   </div>
               </div>
           </div>
       )
    } 

}
export default BoxOffice;