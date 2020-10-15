import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Navigation from './components/Navigation';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Services from './Services';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Home />
        <About />
        <Services />
        <Blog />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
