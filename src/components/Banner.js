import React, { useEffect, useState } from 'react';
import './Banner.css'
import axios from '../axios';
import requests from '../request';
function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length-1)]
            );
            //random function

        } fetchData();
    }, [])

    return (
        <div>
            <header className='banner'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `linear-gradient( to bottom, rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0.1)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: "center-center",
                }}
            >
                <div className='bannerContent'>

                    <h1 className='bannerTitle'>
                        {movie?.title || movie?.name || movie?.original_name}

                    </h1>

                    {/* <div className='buttons'>
                        for future button
                        
                    </div> */}
                    <h1 className='bannerDescription'>
                        {(movie?.overview)}
                    </h1>

                </div>

            </header>

        </div >
    )
}
export default Banner;

