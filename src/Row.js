import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import instance from './axios';
import './styles/rows.scss';

function Row({title, fetchUrl, isLargeRow}) {
    
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('')
    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
           
          
        }
        fetchData();
    }, [fetchUrl])
   
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const handleCLick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('')
        }
        else{
            console.log(movie);
            console.log(movie.title);
            movieTrailer(movie?.title || "").then(url=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams);
                setTrailerUrl(urlParams.get('v'));
                
            })
            .catch(error=> console.log(error))
     
        }

    }
    return (
        <div className='row'>
            
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie=>(
                    <img onClick={() => handleCLick(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={  `${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
                    alt={movie.title}
                    key={movie.id}>
                    </img>
                ))}
            </div>
            {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} />}
           
        </div>
    )
}

export default Row
