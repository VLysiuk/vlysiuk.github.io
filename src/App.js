import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Resume from './Resume';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/cv" component={Resume} />
        <Route path="/contact" component={Contact} />

        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
            <Link to="/" className="item">Home</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/blog" className="item">Blog</Link>
            <Link to="/cv" className="item">CV</Link>
            <Link to="/contact" className="item">Contact</Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
