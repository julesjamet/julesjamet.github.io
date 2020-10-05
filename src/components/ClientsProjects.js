import React from 'react';

import Zamzam from '../assets/images/zamzam.png';

import Shopify from '../assets/images/shopify.png';
import Liquid from '../assets/images/liquid.png';
import Html from '../assets/images/html.png';
import Css from '../assets/images/css.png';
import Js from '../assets/images/js.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ClientsProjects extends React.Component {
    render() {
        return (
            <section  id="clients_projects" >
                <h2 style={{ fontFamily: 'Source sans Pro, sans-serif', padding: "20px", textAlign: 'left' }} > Clients Projects</h2>
                <div class="row">
                    <div class="col-12 col-md-6">   
                        <div style={{ background: `url(${Zamzam}) center / cover no-repeat` , height: "300px" , margin: '15px' }} /> 
                        
                        <div class="shadow" style={{ margin: "15px" , padding: "5px" }}>
                            <div class="d-flex" style={{ paddingTop: "5px" , paddingBottom: "5px" ,paddingLeft: "20px" }}>
                                <FontAwesomeIcon icon="star" style={{ fontSize: "16px" }} />
                                <h6 style={{ paddingLeft: "5px" }}>zamzamjewels.com</h6>
                            </div>
                            <p style={{ paddingLeft: "20px" , paddingRight: "10px" }} >Creation of shopify store with design changes. New product page.&nbsp;</p>
                        <div/>

                        <div class="d-flex" style={{ padding: "10px" , paddingLeft: "20px" }}>
                            <div style={{ marginRight: "10px" }}>
                                <img alt="Shopify logo" src={Shopify} width="50"/>
                                <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>Shopify</p>
                            </div>
                        
                            <div style={{ marginRight: '10px' }}>
                                <img alt="Liquid logo" src={Liquid} width="50"/>
                                <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' , marginTop: '10px' }}>Liquid</p>
                            </div>

                            <div style={{ marginRight: '10px' }}>
                                <img alt="html logo" src={Html} width="53"/>
                                <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' , marginTop: '10px' }}>html</p>
                            </div>

                            <div style={{ marginRight: '10px' }}>
                                <img alt="css logo" src={Css} width="50" style={{ paddingTop: '5px'}}/>
                                <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' , marginTop: '10px' }}>css</p>
                            </div>
                            <div style={{ marginRight: '10px' }}>
                                <img alt="js logo" src={Js} style={{ paddingTop: '5px' , height: "50px"}}/>
                                <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' , marginTop: '10px' }}>js</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default ClientsProjects;