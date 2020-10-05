import React from 'react';
import Macbook from '../assets/images/thumbnail-MacBook-Air_2x.png';
import SocialBar from './SocialBar';
import { greeting } from '../content';

class Hero extends React.Component{
    render() {
        return (
            <div className="container hero">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-5 offset-lg-1 offset-xl-0 d-sm-flex justify-content-sm-center order-md-2 phone-holder">
                        <div className="d-sm-flex justify-content-sm-center align-items-sm-center phone-mockup">
                            <img className="device"  alt="Macbook" src={Macbook}/>
                            <div className="screen"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-5 offset-xl-1 order-md-1">
                        <h1>{greeting.username}</h1>
                        <h2 style={{color: 'rgb(255,255,255)'}}>{greeting.title}</h2>
                        <p style={{textAlign: "justify"}} >{greeting.subtitle}</p>
                        <SocialBar/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;