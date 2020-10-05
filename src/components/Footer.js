import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialBar from './SocialBar';

import ProfilePic from '../assets/images/profile_pic.jpeg';

class Footer extends React.Component {
    render() {
        return (
            <footer id="contact_me">
                <h3 class="text-left" style={{ fontFamily: 'Source Sans Pro , sans-serif' , paddingLeft: '20px' }}>Reach out to me!</h3>
                <div class="row">
                    <div class="col-12 col-lg-4 order-1 order-lg-2" style={{ textAlign: 'center' , marginTop: '20px' , marginBottom: '20px' }}>
                            <img alt="Jules Jamet" src={ProfilePic} width="200" style={{ borderRadius: '50%' , border: "5px solid #0e498a" }}/>
                    </div>
                    <div class="col-12 col-lg-8 order-2 order-lg-1">
                        <div style={{ padding: "15px" }}>
                            <h5 class="text-center" style={{ fontFamily: 'Source Sans Pro, sans-serif' , fontSize: '16px' , color: '#868e96' }}>DISCUSS A PROJECT OR JUST WANT SAY HI? MY INBOX IS OPEN FOR ALL</h5>
                            <h5 class="text-center" style={{ fontFamily: 'Source Sans Pro , sans-serif' , fontSize: '16px' , color: '#33373b' }}><span> 👾 </span>  Aspiring Software Developper&nbsp; | Open Source Contributor&nbsp;&nbsp; <span>🚀</span> </h5>
                            <div class="d-flex justify-content-center">
                                <FontAwesomeIcon icon="map-marker-alt" style={{color: '#868e96', paddingTop: '4px' }}/>
                                <p style={{ paddingLeft: '10px' , fontFamily: 'Source Sans Pro , sans-serif'  , color: '#868e96' , fontSize: '14px' , paddingTop: '1px' }}> Tangier, Morocco </p>
                            </div>
                            <div class="d-flex justify-content-center">
                            <FontAwesomeIcon icon="map-marker-alt" style={{ color: '#868e96' , paddingTop: '4px' }}/>
                            <i class="fas fa-map-marker-alt" style={{ color: '#868e96' , paddingTop: '4px' }}/>
                                <p style={{ paddingLeft: '10px' , fontFamily: 'Source Sans Pro , sans-serif'  , color: '#868e96' , fontSize: '14px' , paddingTop: '1px' }}>Bali, Indonesia</p>
                            </div>
                            <p class="text-center" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Open for opportunities: Yes</p>
                            <SocialBar/>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;