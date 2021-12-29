import React, { useEffect, useState } from 'react';
import instance from './axios';
import './styles/rows.scss';

function Row({title, fetchUrl, isLargeRow}) {
    
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
           
          
        }
        fetchData();
    }, [fetchUrl])
   
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie=>(
                    <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={  `${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
                    alt={movie.name}
                    key={movie.id}>
                    </img>
                ))}
                <div className=''>

                </div>
            </div>
            
        </div>
    )
}

export default Row
