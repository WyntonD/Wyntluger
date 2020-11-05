import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import { motion } from 'framer-motion';
import classes from './BackgroundVid.module.css';

function BackgroundVid() {
    const variant ={
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    return (
        <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={variant}>
        <div className={classes.Container} style={{backgroundColor: '#000'}}>
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src="./file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    {/* <h1 style={{color: '#fff'}}>Welcome!</h1> */}
                    
                    {/* <img
                        src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        alt="profile" /> */}
                    <img src={process.env.PUBLIC_URL + './images/WLLogo.jpg'} alt="Logo" style={{width:500, height:500}}></img>
                    <Moment format="MMMM Do YYYY, h:mm a" style={{fontFamily:"'Cinzel', serif"}} /> <br />
                    <Link to="/beats">
                    <button type="button" className="btn btn-outline-dark">Enter</button>
                    </Link>
                </div>  
            </div>
        </div>
        </motion.div>
    
    )
}

export default BackgroundVid;
