import React from 'react';
import developer_activity from '../assets/images/developer_activity.svg';
import WhatIDo from './WhatIDo';
import Roll from 'react-reveal/Roll';

class ProgLangs extends React.Component {
    render() {
        return (
            
                <div class="container" id="skills">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="d-flex justify-content-center align-items-center" style={{padding: "30px", height: '100%' }}>
                                <img alt="developer_activity" src={developer_activity} style={{width: "70%"}}/>
                            </div>
                        </div>
                        <WhatIDo/>
                    </div>
                </div>
            
        )
    }
}

export default ProgLangs;