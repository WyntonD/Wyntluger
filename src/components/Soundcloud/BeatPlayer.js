import React from 'react';
import ReactPlayer from "react-player"


// import classes from '../BackgroundVid/BackgroundVid.module.css';

function BeatPlayer() {
    return (
        <div className="Beatplayer" style={{backgroundColor: '#000'}}>
            <ReactPlayer
                width='100%'
                url="https://soundcloud.com/wyntluger"
            />
        </div>
    )
}

export default BeatPlayer;