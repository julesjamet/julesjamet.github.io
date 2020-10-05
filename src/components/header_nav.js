import React from 'react';
import Logo from '../assets/images/Background_logo_small_2.png';

class Nav extends React.Component {
    render() {
        return (
            <div className="navbar navbar-light navbar-expand-md navigation-clean-search">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" >
                        <img alt="Working on computer" src={Logo}/>
                    </a>
                    <a data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"/>
                    </a>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        
                        <ul className="nav navbar-nav ml-auto">
                            { this.props.navItems.map( nav => {
                                return (
                                    <li className="nav-item"><a href={nav.link} className="nav-link" > { nav.title} </a></li>
                                )
                            }) }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;