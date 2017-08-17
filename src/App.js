import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './layout/Header.js';
import Footer from './layout/Footer.js';
import Sidebar from './layout/Sidebar.js';
import Home from './pages/Home.js';
import LifeArticles from './pages/Life.js';
import BeautyArticles from './pages/Beauty.js';
import AboutMe from './pages/About.js';
import ContactInfo from './pages/Contact.js';
import CareerArticles from './pages/Career.js';

const App = () => (
  <Router>
    <div>

      <Header />

      <Route exact path="/" render={() =>           

              <Home />
        } />

      <Route path="/contact" render={() =>
          <ContactInfo />
        } />

      <Route path="/about" render={() =>
          <AboutMe />
        } />

      <Route path="/life" render={() =>           
          <LifeArticles />
        } />

      <Route path="/career" render={() =>           
          <CareerArticles />
        } />

      <Route path="/beauty" render={() =>           
          <BeautyArticles />
        } />

      <Route path="/food" render={() =>           
          <AboutMe />
        } />

      <Sidebar />
      <Footer />

    </div>
  </Router>
);

export default App;
