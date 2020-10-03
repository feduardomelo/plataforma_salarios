import React from 'react';
import './App.css';
import Footer from './components/footer'
import Nav from './components/nav'
import Routes from './routes'

function App() {
  return (
    <div className="App">
      
      <Nav/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
