import React from 'react';
import Macbook from '../assets/images/thumbnail-MacBook-Air_2x.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                        <h1>Jules JAMET&nbsp;</h1>
                        <h2 style={{color: 'rgb(255,255,255)'}}>Fullstack Web Developer</h2>
                        <p style={{textAlign: "justify"}} >A passionate Software Developer&nbsp;&nbsp;having an experience of building Web and Mobile applications with&nbsp; Ruby on Rails / JavaScript / React.js&nbsp; and some other cool libraries and frameworks.</p>
                        <div className="d-flex flex-row justify-content-center"
                        style={{background: "#f5f5f7" , borderRadius: "10px"}}>
                            
                            <a  href="#" style={{padding: "5px"}}>
                                <FontAwesomeIcon icon={['fab', 'github']} style={{fontSize: '50px', color: "#f5f5f7",marginTop: "4px", background: "#000000", padding: "10px" , borderRadius: "50%"}} />
                            </a>

                            <a href="#" style={{padding: "5px"}}>
                                <FontAwesomeIcon icon={['fab', 'google']} style={{fontSize: '50px', color: "#f5f5f7",marginTop: "4px", background: "#e34137", padding: "10px" , borderRadius: "50%"}} />
                            </a>

                            <a href="#" style={{padding: "5px"}}>
                                <FontAwesomeIcon icon={['fab', 'facebook']} style={{fontSize: '50px', color: "#f5f5f7",marginTop: "4px", background: "#3b5998", padding: "10px" , borderRadius: "50%"}} />
                            </a>

                            <a href="#" style={{padding: "5px"}}>
                                <FontAwesomeIcon icon={['fab', 'facebook-messenger']} style={{fontSize: '50px', color: "#f5f5f7",marginTop: "4px", background: "#3698f8", padding: "10px" , borderRadius: "50%"}} />
                            </a>

                            {/* <a href="#" style={{padding: "5px"}}>
                                <FontAwesomeIcon icon={['fab', 'stack-overflow']} style={{fontSize: '50px', color: "#f5f5f7",marginTop: "4px", background: "#ed7c24", padding: "10px" , borderRadius: "50%"}} />
                            </a> */}

                            <a href="#" style={{padding: "5px"}}>
                                <FontAwesomeIcon icon={['fab', 'linkedin-in']} style={{fontSize: '50px', color: "#f5f5f7",marginTop: "4px", background: "#2a7fb7", padding: "10px" , borderRadius: "50%"}} />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;