import React from 'react';

import Button from 'react-bootstrap/Button';

import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { useNavigation } from 'framer';
import 'moment-timezone';

import '../Nav/TransNav.css';


function MainLanding() {
    const navigation = useNavigation()
    return (
        <div className="wrapper" 
             id="landing-wrapper"
        >
            <div className="landing-title">
                <Moment format="dddd" 
                        style={{
                            color:'#000', 
                            textAlign:'center', 
                            fontSize:20}} 
                /> 
                <br /> 
                <br />
                <img src={process.env.PUBLIC_URL + './images/WLLogo.jpg'} alt="Logo" style={{width:300, height:300, marginBottom:'30px'}}></img> <br />
                <Link to="/beats">
                    <Button variant="success" 
                            style={{margin:'10px'}} 
                            onClick={() => {
                            navigation.goBack()
                            }}
                    >
                        Enter
                    </Button>
                </Link> 
            </div>
        </div>
    )
};

export default MainLanding;
