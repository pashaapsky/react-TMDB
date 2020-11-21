import React, {useState, useEffect} from 'react';
import axios from "../axios";
import requests from "../requests";
import "../css/banner.css"

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }

        fetchData();

    }, []);

    function truncateString(str, num) {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }

    if (Object.keys(movie).length) {

        return (
            <header
                className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(
                "${baseUrl}${movie.backdrop_path}"
                )`,
                    backgroundPosition: "center center"
                }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">
                        {movie.title || movie.name || movie.original_name}
                    </h1>

                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>

                        <button className="banner__button">My play list</button>
                    </div>

                    <p className="banner__description">
                        {truncateString(movie.overview, 150)}
                    </p>
                </div>

                <div className="banner--fadeBottom">

                </div>
            </header>
        )
    } else {
        return null;
    }

}

export default Banner;