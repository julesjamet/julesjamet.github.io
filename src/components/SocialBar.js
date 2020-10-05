import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {socialMedias } from "../content";

class SocialBar extends React.Component {
    render() {
        return (
            <div className="d-flex flex-row justify-content-center" style={{background: "#f5f5f7" , borderRadius: "10px"}}>

            { socialMedias.map( social => {
                return (
                    <a  href={social.link} target= "_blank" style={{padding: "5px"}}>
                    <FontAwesomeIcon icon={['fab', `${social.fontawesomeClassname}`]} style={{
                        fontSize: '50px',
                        color: "#f5f5f7",
                        marginTop: "4px",
                        background: social.color,
                        padding: "10px",
                        borderRadius: "50%"}} />
                </a>
                )
            })  }
            </div>
        )
    }
}

export default SocialBar;