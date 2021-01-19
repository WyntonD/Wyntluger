import React from 'react';

// Components
import Email2 from '../Email2';
import Button from 'react-bootstrap/Button';
import DirectionsPage from '../Pages/DirectionsPage';
import Soundcloud from '../Soundcloud/Soundcloud';

// Dependencies
import $ from 'jquery';
import Moment from 'react-moment';
import 'moment-timezone';
import { motion } from 'framer-motion';

import './TransNav.css';


// Desktop Navigation jQuery
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }
    else {
          $('nav').removeClass('black');
    }
})

function TransNav() {
      
    return (
        <div className="wrapper">
            <header id="top">
                <nav>
                    <div class="menu-icon">
                        <i class="fa fa-bars fa-2x"></i>
                    </div>
                    <div class="logo">
                        <a href="#top">
                            <img src={process.env.PUBLIC_URL + './images/WLLogo.jpg'} alt="Logo" style={{width:50, height:50}}></img>
                        </a>
                    </div>
                    <div class="menu">
                        <ul>
                            <li>
                                <a href="#top" 
                                    style={{
                                    color:'teal'
                                            }}
                                >
                                    <Moment format="dddd" 
                                            style={{
                                            color:'#fff', 
                                            textAlign:'center', 
                                            fontSize:20}} 
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#top" 
                                   style={{
                                    color:'teal'}}>
                                        Home
                                </a>
                            </li>
                            <li>
                                <a href="#beats" 
                                   style={{
                                    color:'teal'}}
                                > 
                                       Beats 
                                </a>
                            </li>
                            <li>
                                <a href="#buy" 
                                    style={{
                                    color:'teal'}}
                                >
                                    Buy
                                </a>
                            </li>
                            <li>
                                <a href="#howto" 
                                    style={{color:'teal'}}
                                >
                                    Directions
                                </a>
                            </li>
                            <li>
                                <a href="#contact" 
                                    style={{
                                    color:'teal'}}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                    <div className="main-title">
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            onHoverStart={e => {}}
                            onHoverEnd={e => {}}
                        > 
                            <img src={process.env.PUBLIC_URL + './images/BlackLogo.png'} alt="Logo" style={{width:50, height:50}}></img><br /> <br />
                        </motion.a>
                            <Button 
                                variant="danger"
                                style={{marginTop:'20px;'}}
                            >
                                <a href="#beats" 
                                    style={{
                                    color:'teal'}}
                                > 
                                    Beats 
                                </a>
                            </Button>
                        {/* <h1 style={{color:"#fff", marginTop:'30px;'}}>SALE: 13% Off of Leasing for 2 weeks!</h1> */}
                    </div>
            </header>
        <div class="content"  
             id="beats"
        >
            <Soundcloud className="soundcloud" 
                        style={{width:'100%'}}
            />
        </div>
        <div class="order-form" 
             id="buy">
            <Email2 />
        </div>
        <div class="directions" 
             id="howto">
            <DirectionsPage />
        </div>
        <div class="content">
            <strong style={{
                    textAlign:'center', 
                    color:'#fff'}}
            >
                Unlimited Leasing Contracts
            </strong>
                <p style={{
                    textAlign:'center'}}
                > 
                    Receive full royalities up to 1 million streams</p>
                <p style={{
                    color:'#fff', 
                    textAlign:'center'}}
                >
                    Wyntluger Beats brings you sounds of multiple of genres to include Electronic, R & B, and Hip-hop. 
                    The sounds provided are made with the sole intents of optimal quality and precision to maximize potential for all artists and songwriters 
                    of many backgrounds. With this, I thank you and wish you well. <br /> <br />
                <p style={{
                    textAlign:'center', 
                    color:'#fff'}}
                >
                    -Wyntluger
                </p>
                </p>
        </div>
        <div class="content" id="contact">
            Contact:
            <h4 style={{
                color:'#fff'}}
            >
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                Email:
            </h4>
                <p>wyntluger@gmail.com</p>
            <h4 style={{
                color:'#fff'}}
            >
                Instagram:
            </h4>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-camera-fill" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path fill-rule="evenodd" d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg>
                <a href="https://www.instagram.com/wynton_d/?hl=en" target="_blank">
                    @wynton_d
                </a> 
                <br />
            <h4 style={{
                color:'#fff'}}
            >
                Soundcloud
            </h4>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cloud-fill" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                </svg>
                <a href="https://soundcloud.com/wyntluger" target="_blank">
                    wyntluger
                </a>
        </div>
        <footer style={{color:'#fff', 
                textAlign:'center'}}
        >
            Wyntluger Beats. All rights reserved.@
        </footer>
    </div>
    )};

export default TransNav;
