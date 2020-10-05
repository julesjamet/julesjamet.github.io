import React from 'react';
import developer_activity from '../assets/images/developer_activity.svg';
import WhatIDo from './WhatIDo';

class ProgLangs extends React.Component {
    render() {
        return (
            <section id="skills">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-center align-items-center" style={{padding: "30px", marginTop: "50px" }}>
                            <img alt="developer_activity" src={developer_activity} style={{width: "70%"}}/>
                        </div>
                    </div>
                    <WhatIDo/>
                </div>
            </section>
        )
    }
}

export default ProgLangs;