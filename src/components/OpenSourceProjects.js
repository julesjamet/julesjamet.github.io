import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { githubColors } from '../content';

class OpenSourceProjects extends React.Component {
    constructor() {
        super();
        this.state = {
            projects : [],
        }
    }
        
    componentDidMount() {
        fetch('https://api.github.com/users/julesjamet/repos')
        .then(response => response.json())
        .then ((data) => {
            this.setState({
                projects : data.map( project => project).sort(function(a,b) {return b.size - a.size}).slice(0,6),
            })
        })
    }

    render() {
        return (
            <section id="open_source" >
                <h2 style={{ fontFamily: 'Source Sans Pro , sans-serif' , padding: '20px' }}>Open Source Projects</h2>
                <div class="row">
                { this.state.projects.map( project => {
                    console.log(githubColors[`${project.language}`].color);
                    return(
                        <div class="col-12 col-md-6 col-lg-4" style={{ padding: '10px' }}>
                            <div class="shadow" style={{ padding: '5px' , margin: '15px' }}>
                                <div class="d-flex" style={{ paddingTop: '5px' , paddingBottom: '5px' ,paddingLeft: '20px' }}>
                                    <FontAwesomeIcon icon="check-circle" style={{ fontSize: "16px" }} />
                                    <h6 style={{ paddingLeft: '5px' }}>{project.name}</h6>
                                </div>
                                <p style={{ paddingLeft: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                <div>
                                    <div class="d-flex" style={{ padding: '10px' , paddingLeft: '20px' }}>
                                        <div style={{ width: '10px' , height: '10px' , borderRadius: '50%' , background: githubColors[`${project.language}`].color , marginTop: '2px' }}/>
                                        <p style={{ fontSize: '10px' , paddingLeft: '5px' }}>{project.language}</p>
                                        <FontAwesomeIcon icon="user" style={{ marginLeft: '20px' , fontSize: '12px', marginTop: '1px' }}/>
                                        <p style={{ fontSize: '10px' , paddingLeft: '5px' , marginTop: '1px'}}>{project.forks_count}</p>
                                        <FontAwesomeIcon icon="star" style={{ marginLeft: '20px' , fontSize: '12px', marginTop: '3px' }}/>
                                        <p style={{ fontSize: '10px' , paddingLeft: '5px' , marginTop: '1px'}}>{ project.stargazers_count }</p>
                                    </div>
                                    <p style={{ fontSize: '10px' , position: 'absolute' , right: '15%' ,bottom: '14%' }}>{project.size} KB</p>
                                </div>
                            </div>
                        </div>

                    )
                } ) }
                </div>
            </section>
            
        )
    }
}

export default OpenSourceProjects;