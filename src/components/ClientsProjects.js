import React from 'react';
import { Projects } from '../content';
import zamzam from '../assets/images/zamzam.png';
import woudz from '../assets/images/woudz.png';
import judicael from '../assets/images/judicael.png';
import madariss from '../assets/images/madariss.png';
import feelivelove from '../assets/images/feelivelove.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { Shopify, Html5, Css3, Rubyonrails, Json, Heroku, Javascript, Wordpress, Woocommerce } from '@icons-pack/react-simple-icons';


class ClientsProjects extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div className="container">
                <Fade left>
                    <h2 style={{ fontFamily: 'Source sans Pro, sans-serif', padding: "20px", textAlign: 'left' }} > Clients Projects</h2>
                </Fade>
               
                
                <div class="row">
                
                        <div class="col-12 col-md-4 ">   
                            <Flip left>
                            <div>
                                <div class="shadow">
                                    <div style={{ background: `url(${zamzam}) center / cover no-repeat` , height: "300px" , margin: '15px' }} />          
                                    <div class="d-flex" style={{ paddingTop: "5px" , paddingBottom: "5px" ,paddingLeft: "20px" }}>
                                        <FontAwesomeIcon icon="star" style={{ fontSize: "16px" }} />
                                        <h6 style={{ paddingLeft: "5px" }}>zamzamjewels.com</h6>
                                    </div>
                                    <p style={{ paddingLeft: "20px" , paddingRight: "10px", height: "80px" }} >Shopify website based on a free basic template. Added tags features to the collection page. Redesigned Product page. Set up of plugins.  </p>                            
                                    <div class="d-flex" style={{ padding: "10px" , paddingLeft: "20px" }}>                                        
                                                <div style={{ marginRight: "10px" }}>
                                                    <Shopify color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>shopify</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Html5 color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>html</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Css3 color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>css</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Javascript color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>Javascript</p>
                                                </div>
                                        
                                    </div>
                                </div>
                                </div>
                            </Flip >
                        </div>
                        <div class="col-12 col-md-4 ">   
                            <Flip left>
                            <div>
                                <div class="shadow">
                                    <div style={{ background: `url(${madariss}) center / cover no-repeat` , height: "300px" , margin: '15px' }} />          
                                    <div class="d-flex" style={{ paddingTop: "5px" , paddingBottom: "5px" ,paddingLeft: "20px" }}>
                                        <FontAwesomeIcon icon="star" style={{ fontSize: "16px" }} />
                                        <h6 style={{ paddingLeft: "5px" }}>madarissibnmashish.com</h6>
                                    </div>
                                    <p style={{ paddingLeft: "20px" , paddingRight: "10px", height: "80px" }} >School Website based on Locomotive CMS. Open Source CMS based on Ruby on rails & React js. Designed with bootstrap 4.3.</p>                            
                                    <div class="d-flex" style={{ padding: "10px" , paddingLeft: "20px" }}>                                        
                                    <div style={{ marginRight: "10px" }}>
                                                    <Rubyonrails color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>ruby on rails</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Html5 color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>html</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Css3 color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>css</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Javascript color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>Javascript</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Heroku color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>Heroku</p>
                                                </div>
                                        
                                    </div>
                                </div>
                                </div>
                            </Flip >
                        </div>
                        <div class="col-12 col-md-4 ">   
                            <Flip left>
                            <div>
                                <div class="shadow">
                                    <div style={{ background: `url(${judicael}) center / cover no-repeat` , height: "300px" , margin: '15px' }} />          
                                    <div class="d-flex" style={{ paddingTop: "5px" , paddingBottom: "5px" ,paddingLeft: "20px" }}>
                                        <FontAwesomeIcon icon="star" style={{ fontSize: "16px" }} />
                                        <h6 style={{ paddingLeft: "5px" }}>judicael-sacred-skulls.myshopify.com</h6>
                                    </div>
                                    <p style={{ paddingLeft: "20px" , paddingRight: "10px", height: "80px" }} >Shopify Ecommerce website based on a basic free template. Added custom Css and fonts. Payment gateways integration</p>                            
                                    <div class="d-flex" style={{ padding: "10px" , paddingLeft: "20px" }}>                                        
                                    <div style={{ marginRight: "10px" }}>
                                                    <Shopify color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>shopify</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Html5 color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>html</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Css3 color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>css</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Javascript color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>Javascript</p>
                                                </div>
                                        
                                    </div>
                                </div>
                                </div>
                            </Flip >
                        </div>
                        <div class="col-12 col-md-4 ">   
                            <Flip left>
                            <div>
                                <div class="shadow">
                                    <div style={{ background: `url(${woudz}) center / cover no-repeat` , height: "300px" , margin: '15px' }} />          
                                    <div class="d-flex" style={{ paddingTop: "5px" , paddingBottom: "5px" ,paddingLeft: "20px" }}>
                                        <FontAwesomeIcon icon="star" style={{ fontSize: "16px" }} />
                                        <h6 style={{ paddingLeft: "5px" }}>woudz.com</h6>
                                    </div>
                                    <p style={{ paddingLeft: "20px" , paddingRight: "10px", height: "80px" }} >Brand furniture website written in plain Html, Css & JS. Currently working on Ruby on rails App development </p>                            
                                    <div class="d-flex" style={{ padding: "10px" , paddingLeft: "20px" }}>                                                                                        
                                                <div style={{ marginRight: "10px" }}>
                                                    <Html5 color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>html</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Css3 color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>css</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Javascript color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>Javascript</p>
                                                </div>
                                        
                                    </div>
                                </div>
                                </div>
                            </Flip >
                        </div>
                        <div class="col-12 col-md-4 ">   
                            <Flip left>
                            <div>
                                <div class="shadow">
                                    <div style={{ background: `url(${feelivelove}) center / cover no-repeat` , height: "300px" , margin: '15px' }} />          
                                    <div class="d-flex" style={{ paddingTop: "5px" , paddingBottom: "5px" ,paddingLeft: "20px" }}>
                                        <FontAwesomeIcon icon="star" style={{ fontSize: "16px" }} />
                                        <h6 style={{ paddingLeft: "5px" }}>feelivelove.com</h6>
                                    </div>
                                    <p style={{ paddingLeft: "20px" , paddingRight: "10px", height: "80px" }} >E-commerce website based on Woocommerce / Wordpress. Payment gateways integration and custom Css.</p>                            
                                    <div class="d-flex" style={{ padding: "10px" , paddingLeft: "20px" }}>                                                                                        
                                                <div style={{ marginRight: "10px" }}>
                                                    <Wordpress color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>wordpress</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Woocommerce color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>woocommerce</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Html5 color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>html</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Css3 color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>css</p>
                                                </div>
                                                <div style={{ marginRight: "10px" }}>
                                                    <Javascript color="rgb(135, 142, 150)" size={40} />
                                                    <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>Javascript</p>
                                                </div>
                                        
                                    </div>
                                </div>
                            </div>
                            </Flip >
                        </div>
                </div>
                
                </div>
            </React.Fragment>
        )
    }
}

export default ClientsProjects;