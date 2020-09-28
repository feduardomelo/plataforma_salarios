import React from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import './App.css';
import Footer from './components/footer'
import Nav from './components/nav'
import Main from './pages/main'
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
