import React from 'react';
import YouTube from "react-youtube";
import '../css/youtube-player.css'


function YoutubePlayer({trailerUrl, closeYoutubePlayer}) {
    //config for YouTube videos
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="youtube-player player">
            <YouTube containerClassName="player__body" videoId={trailerUrl} opts={opts}/>

            <button
                className="player__close-btn"
                onClick={closeYoutubePlayer}
            >&times;
            </button>
        </div>
    )
}

export default YoutubePlayer;