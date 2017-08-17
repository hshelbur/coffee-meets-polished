import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
            <img src="images/cmp-logo.jpg" alt="logo" />
        </header>
        <nav className="nav-bar">
          <ul>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to={{pathname: "/about"}}>ABOUT</NavLink></li>
            <li><NavLink to={{pathname: "/life"}}>LIFE</NavLink></li>
            <li><NavLink to={{pathname: "/career"}}>CAREER</NavLink></li>
            <li><NavLink to={{pathname: "/beauty"}}>BEAUTY</NavLink></li>
            <li><NavLink to={{pathname: "/food"}}>FOOD</NavLink></li>
            <li><NavLink to={{pathname: "/contact"}}>CONTACT</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header
