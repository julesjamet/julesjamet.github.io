import React from 'react';
import Nav from './header_nav';
import Hero from './container_hero';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <Hero/>
            </div>    
        )   
    }
}

export default Header;