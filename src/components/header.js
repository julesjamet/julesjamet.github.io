import React from 'react';
import './header.css';
import Navigation from './header_nav';
import Hero from './container_hero';

class Header extends React.Component {
    render() {
        return (
            <div className="header-blue">
                <Navigation navItems={this.props.navItems} />
                <Hero/>
            </div>
        )   
    }
}

export default Header;