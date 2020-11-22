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
          <h2 style={{color:'#fff', fontFamily:" 'EB Garamond', serif", color:'yellow'}}>Beats <a href="https://soundcloud.com/wyntluger" target="_blank">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cloud-fill" fill="#f30" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                </svg>
                </a></h2>
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
