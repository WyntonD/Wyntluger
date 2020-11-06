import React from 'react';
import $ from 'jquery';
import Moment from 'react-moment';
import 'moment-timezone';
import BuyForm from '../BuyForm';
import Directions from '../Directions';
import Contact from '../Contact';
import Soundcloud from '../Soundcloud/Soundcloud';
import './TransNav.css';


$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

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
            <header>
            <nav>
                <div class="menu-icon">
                    <i class="fa fa-bars fa-2x"></i>
                </div>
                <div class="logo">
                <img src={process.env.PUBLIC_URL + './images/WLLogo.jpg'} alt="Logo" style={{width:50, height:50}}></img>
                </div>
                <div class="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Beats</a></li>
                        <li><a href="#">Buy</a></li>
                        <li><a href="#">Directions</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="main-title">
            {/* <h1 id="title">
            Welcome to Wyntluger Beats <br />
            <Moment format="dddd" style={{color:'#fff', textAlign:'center'}} />
            </h1> */}
            <img src={process.env.PUBLIC_URL + './images/BlackLogo.png'} alt="Logo" style={{width:50, height:50}}></img>
        </div>
        </header>
        <div class="content">
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div class="content">
        <Soundcloud />
        </div>
        <div class="content">
            Contact:
        </div>
        </div>
    )
};

export default TransNav;
