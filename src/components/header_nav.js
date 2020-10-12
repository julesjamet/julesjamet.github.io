import React from 'react';
import Logo from '../assets/images/Background_logo_small_2.png';

class Nav extends React.Component {
    state = {
        navCollapsed: true
      }
    
    _onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    }
    
    render() {
        const {navCollapsed} = this.state
        return (
            <div className="navbar navbar-light navbar-expand-md navigation-clean-search">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" >
                        <img alt="Working on computer" src={Logo}/>
                    </a>
                    <button aria-expanded='false' className='navbar-toggle collapsed navbar-toggler' onClick={this._onToggleNav}>
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'} id="navcol-1">
                        
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