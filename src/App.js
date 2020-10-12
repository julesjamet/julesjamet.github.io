import React from 'react';
import './App.css';
import Header from './components/header';
import ProgLangs from './components/ProgLangs';
import ClientsProjects from './components/ClientsProjects';
import OpenSourceProjects from './components/OpenSourceProjects';
import Footer from './components/Footer';
import {navBar} from './content.js';

import './components/fontAwesomeIcons';

function App() {
  return (
    <div className="App">
      <Header navItems={navBar} />
      <ProgLangs/>
      <ClientsProjects/>
      <OpenSourceProjects/>
      <Footer/>
    </div>
  );
}

export default App;
