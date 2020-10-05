import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

class OpenSourceProjects extends React.Component {
    render() {
        return (
            <section id="open_source" >
                <h2 style={{ fontFamily: 'Source Sans Pro , sans-serif' , padding: '20px' }}>Open Source Projects</h2>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4" style={{ padding: '10px' }}>
                        <div class="shadow" style={{ padding: '5px' , margin: '15px' }}>
                            <div class="d-flex" style={{ paddingTop: '5px' , paddingBottom: '5px' ,paddingLeft: '20px' }}>
                                <FontAwesomeIcon icon="check-circle" style={{ fontSize: "16px" }} />
                                <h6 style={{ paddingLeft: '5px' }}>kidzact App</h6>
                            </div>
                            <p style={{ paddingLeft: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            <div>
                                <div class="d-flex" style={{ padding: '10px' , paddingLeft: '20px' }}>
                                    <div style={{ width: '10px' , height: '10px' , borderRadius: '50%' , background: '#e0bf4c' , marginTop: '2px' }}/>
                                    <p style={{ fontSize: '10px' , paddingLeft: '5px' }}>javascript</p>
                                    <FontAwesomeIcon icon="user" style={{ marginLeft: '20px' , fontSize: '12px', marginTop: '1px' }}/>
                                    <p style={{ fontSize: '10px' , paddingLeft: '5px' , marginTop: '1px'}}>17</p>
                                    <FontAwesomeIcon icon="star" style={{ marginLeft: '20px' , fontSize: '12px', marginTop: '3px' }}/>
                                    <p style={{ fontSize: '10px' , paddingLeft: '5px' , marginTop: '1px'}}>30</p>
                                </div>
                                <p style={{ fontSize: '10px' , position: 'absolute' , right: '15%' ,bottom: '14%' }}>2054 KB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        )
    }
}

export default OpenSourceProjects;