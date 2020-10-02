import React from 'react';
import './App.css';
import Header from './components/header';
import ProgLangs from './components/ProgLangs';
import ClientsProjects from './components/ClientsProjects';

import './components/fontAwesomeIcons';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProgLangs/>
      <ClientsProjects/>
    </div>
  );
}

export default App;
