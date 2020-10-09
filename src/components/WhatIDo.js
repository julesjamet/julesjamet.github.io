import React from 'react';
import {skillsSection} from '../content';
import { ReactJs, Html5, Ruby, Rubyonrails, Css3, Javascript, Visualstudiocode, Yarn, Postgresql, Webpack, Graphql, NodeDotJs, Googledrive, Sketch  } from '@icons-pack/react-simple-icons';

class WhatIDo extends React.Component {
    render() {
        return (
            <div class="col-12 col-md-6" style={{ padding: '30px' }}>
                <div>
                    <h2 style={{fontFamily: 'Source Sans Pro, sans-serif', color: "#33373b" }} >{skillsSection.title}</h2>
                    <p style={{ fontFamily: 'Source Sans Pro, sans-serif', color: '#878e96' }}>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK<br/></p>
                    <div class="row">                        
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <Ruby color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>ruby</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <Rubyonrails color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>ruby on Rails</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <Html5 color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>html</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <Css3 color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>css</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <Javascript color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>javascript</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <ReactJs color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>reactjs</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <Postgresql color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>postgresql</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <Yarn color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>yarn</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <Webpack color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>webpack</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <Visualstudiocode color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>visualstudiocode</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <Graphql color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>graphql</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <NodeDotJs color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>nodejs</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <Googledrive color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>google drive</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <Sketch color="rgb(135, 142, 150)" size={50} />  
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>sketch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default WhatIDo;