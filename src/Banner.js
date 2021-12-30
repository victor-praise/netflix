import React, { useEffect, useState } from 'react'
import instance from './axios';
import requests from './request';
import './styles/banner.scss'

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
               )
            return request;  
        }
        fetchData();
    }, [])
    function truncate(str,n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    return (
       <header className='banner' style={{
           backgroundSize: "cover",
           backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
           backgroundPosition:'center center'
       }}>
           <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie?.title || movie?.original_name || movie?.name}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>
                    {truncate(movie?.overview, 150)}
                </h1>
                <div className='banner--fadeBottom'></div>
           </div>

       </header>
    )
}

export default Banner
