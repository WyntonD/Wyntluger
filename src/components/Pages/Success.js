import React from 'react';
import $ from 'jquery';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import 'moment-timezone';
import Order from '../Pages/OrderPage';
import Email2 from '../Email2';
import BuyForm from '../BuyForm';
import DirectionsPage from '../Pages/DirectionsPage';
import Contact from '../Contact';
import Soundcloud from '../Soundcloud/Soundcloud';
import '../Nav/TransNav.css';


// $(document).ready(function() {
//     $(".menu-icon").on("click", function() {
//           $("nav ul").toggleClass("showing");
//     });
// });

// Scrolling Effect

// $(window).on("scroll", function() {
//     if($(window).scrollTop()) {
//           $('nav').addClass('black');
//     }

//     else {
//           $('nav').removeClass('black');
//     }
// })

function Success() {
    return (
        <div className="wrapper">
            <header className="main-landing" id="landing">
            {/* <nav>
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
                        <li><a href="#top" style={{color:'green'}}>Home</a></li>
                        <li><a href="#beats" style={{color:'green'}}>Beats</a></li>
                        <li><a href="#buy" style={{color:'green'}}>Buy</a></li>
                        <li><a href="#howto" style={{color:'green'}}>Directions</a></li>
                        <li><a href="#contact" style={{color:'green'}}>Contact</a></li>
                    </ul>
                </div>
            </nav> */}
            <div className="main-title">
            {/* <h1 id="title">
            Welcome to Wyntluger Beats <br />
            </h1> */}
            <Moment format="dddd" style={{color:'#fff', textAlign:'center'}} /> <br />
            <img src={process.env.PUBLIC_URL + './images/BlackLogo.png'} alt="Logo" style={{width:200, height:200}}></img> <br />
            <h1>Congrats on your puchase!</h1>
            <h2>You will receive an email confirmation for your order, 
                followed by a request payment with terms and conditions of your 
                purchase</h2>
            <Link to="/beats">
            <button style={{marginTop:'20px'}} >Back to Beats</button>
            </Link>
        </div>
        </header>
        </div>
    )
};

export default Success;