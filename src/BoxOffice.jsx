import './BoxOffice.css'
import { useState, useEffect } from 'react';
import BoxOfficeCard from './BoxOfficeCard';
import { fetchPopularMovies, fetchRevenue } from './hooks/fetchData';

function BoxOffice() {
    const[boxOfficeMovies, setBoxOfficeMovies] = useState([]);
    const[movieRevenue, setMovieRevenue] = useState([]);

    useEffect(() => {
        fetchPopularMovies().then((res) => {setBoxOfficeMovies(res.results)});
    }, [])

    useEffect(() => {
        if(boxOfficeMovies.length != 0) {

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
               <div className="boxOfficeContent">
                   <div className='boxOfficeCardsWrapper'>
                       <div className="boxOfficeCardContentLeft">
                           <BoxOfficeCard title={movieRevenue[1].original_title} revenue={movieRevenue[1].revenue} number={1} />
                           <BoxOfficeCard title={movieRevenue[2].original_title} revenue={movieRevenue[2].revenue} number={2} />
                           <BoxOfficeCard title={movieRevenue[3].original_title} revenue={movieRevenue[3].revenue} number={3} />
                       </div>
                       <div className='boxOfficeCardContentRight'>
                           <BoxOfficeCard title={movieRevenue[4].original_title} revenue={movieRevenue[4].revenue} number={4} />
                           <BoxOfficeCard title={movieRevenue[5].original_title} revenue={movieRevenue[5].revenue} number={5} />
                           <BoxOfficeCard title={movieRevenue[6].original_title} revenue={movieRevenue[6].revenue} number={6} />
                       </div>
                   </div>
               </div>
           </div>
       )
    } 

}
export default BoxOffice;