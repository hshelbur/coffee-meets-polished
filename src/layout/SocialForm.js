import React, { Component } from 'react';

class SocialForm extends Component {
  render() {
    return(
      <div className="social-form">
        <div className="contact-form">
          <h4>Subscribe for Weekly Updates!</h4>
          <form>          
            <div className="subscribe-inputs">
              <input id="name" type="text" placeholder="First Name" />    
              <input id="email" type="email" placeholder="Email" />
            </div>
            <button className="main-button">SUBSCRIBE</button>
          </form>
        </div>
          <section className="social-icons">
            <a href="http://www.facebook.com/Coffee-Meets-Polished-1734113920215832/" target="_blank" rel="noopener noreferrer">
              <img className="facebook-icon" src="images/facebook-icon.png" alt="facebook" />
            </a>
            <a href="http://www.instagram.com/coffeemeetspolished/" target="_blank" rel="noopener noreferrer">
              <img className="instagram-icon" src="images/instagram-icon.png" alt="instagram" />
            </a>
            <a href="http://www.pinterest.com/coffeemeetspolished" target="_blank" rel="noopener noreferrer">
              <img className="pinterest-icon" src="images/pinterest-icon.png" alt="pinterest" />
            </a>
            <a href="http://www.bloglovin.com/@coffeemeetspolished" target="_blank" rel="noopener noreferrer">
              <img className="bloglovin-icon" src="images/bloglovin-icon.png" alt="bloglovin" />
            </a>
          </section>
      </div>
    );
  }
}

export default SocialForm