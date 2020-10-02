import React from 'react';
import './header.css';
import Nav from './header_nav';
import Hero from './container_hero';

class Header extends React.Component {
    render() {
        return (
            <div className="header-blue">
                <Nav/>
                <Hero/>
            </div>
        )   
    }
}

export default Header;