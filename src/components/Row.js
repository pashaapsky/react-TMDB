import React, {useState, useEffect} from 'react';
import axios from '../axios';
import "../css/row.css";
import movieTrailer from 'movie-trailer';
import YoutubePlayer from "./YoutubePlayer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');


    const closeYoutubePlayer = () => {
        if (trailerUrl) {
            setTrailerUrl('');
        }
    };

    const handleMovieClick = (movie) => {
        //close old video
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            //search movie trailer on YouTube => return trailer id like "v=L-OLf1WzaoQ" => L-OLf1WzaoQ
            movieTrailer(movie.title || movie.name || movie.original_name)
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);

                    setTrailerUrl(urlParams.get('v'));
                })
                .catch(error => console.log(error));
        }
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);

            return request;
        }

        fetchData();

    }, [fetchUrl]);

    return (
        <div className="row">
            <h2 className="row__header">{title}</h2>

            <div className="row__body">
                <div className="row__posters">
                    {movies.map(movie => {
                        return (
                            <img
                                className={`row__poster${isLargeRow ? " row__poster-large" : ""}`}
                                key={movie.id}
                                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                                onClick={() => handleMovieClick(movie)}
                            />
                        )
                    })}
                </div>

                {trailerUrl && <YoutubePlayer trailerUrl={trailerUrl} closeYoutubePlayer={closeYoutubePlayer} />}
            </div>
        </div>
    )
}

export default Row;