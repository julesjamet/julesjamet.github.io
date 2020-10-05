import React from 'react';
import { Projects } from '../content';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ClientsProjects extends React.Component {
    render() {
        return (
            <React.Fragment>
            
                <h2 style={{ fontFamily: 'Source sans Pro, sans-serif', padding: "20px", textAlign: 'left' }} > Clients Projects</h2>
               
                <div class="row">
                { Projects.map( project => {
                    return(
                        <div class="col-12 col-md-6 shadow">   
                            
                            <div style={{ background: `url(${project.imgProject}) center / cover no-repeat` , height: "300px" , margin: '15px' }} />          
                            
                            
                            
                                <div class="d-flex" style={{ paddingTop: "5px" , paddingBottom: "5px" ,paddingLeft: "20px" }}>
                                    <FontAwesomeIcon icon="star" style={{ fontSize: "16px" }} />
                                    <h6 style={{ paddingLeft: "5px" }}>{project.title}</h6>
                                </div>
                                <p style={{ paddingLeft: "20px" , paddingRight: "10px" }} >{project.desc}</p>
                            

                            <div class="d-flex" style={{ padding: "10px" , paddingLeft: "20px" }}>
                                { project.skills.map( skill => {
                                    return(
                                        <div style={{ marginRight: "10px" }}>
                                            <img alt= {`${skill.name} logo`} src={skill.img} width="50"/>
                                            <p class="text-center" style={{ fontSize: "12px" , color: '#868e96' ,marginTop: '10px' }}>{skill.name}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                </div>
            
            </React.Fragment>
        )
    }
}

export default ClientsProjects;