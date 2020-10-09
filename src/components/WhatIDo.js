import React from 'react';
import {skillsSection} from '../content';

class WhatIDo extends React.Component {
    render() {
        return (
            <div class="col-12 col-md-6" style={{ padding: '30px' }}>
                <div>
                    <h2 style={{fontFamily: 'Source Sans Pro, sans-serif', color: "#33373b" }} >{skillsSection.title}</h2>
                    <p style={{ fontFamily: 'Source Sans Pro, sans-serif', color: '#878e96' }}>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK<br/></p>
                    <div class="row">
                        {skillsSection.softwareSkills.map( skill => {
                            return(
                                <div class="col-4 col-md-2">
                            <div class="text-center d-flex flex-column justify-content-center align-items-center">
                                <img alt= {`${skill.name} logo`} src={skill.img} height="50"/>
                                <p style={{marginTop: '20px', fontSize: '12px' , color: '#868e96' }}>{skill.name}</p>
                            </div>
                        </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default WhatIDo;