import React from "react"
import ReactPlayer from "react-player"
import Moment from 'react-moment';
import 'moment-timezone';
import { Layout } from 'antd';
import classes from '../BackgroundVid/BackgroundVid.module.css';

const { Content } = Layout;

function Soundcloud() {
  return (
    <div className={classes.Container} style={{ backgroundColor: '#000', width:'100%', height: '100%' }}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
        {/* <source src={videoSource} type="video/mp4" /> */}
        Your browser does not support the video tag.
            </video>

      <div className={classes.Content}>
        <Content>
        <ReactPlayer
          width='100%'
          url="https://soundcloud.com/wyntluger"
        />
        </Content>
      </div>
    </div>
  )
}

export default Soundcloud;
