import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <SubscribeForm />
        <footer>
          <section>
            <a href="http://www.facebook.com/Coffee-Meets-Polished-1734113920215832/" target="_blank" rel="noopener noreferrer"><img src="images/facebook-icon.png" alt="facebook" /></a>
            <a href="http://www.instagram.com/coffeemeetspolished/" target="_blank" rel="noopener noreferrer"><img className="instagram-icon" src="images/instagram-icon.jpg" alt="instagram" /></a>
            <a href="http://www.pinterest.com/coffeemeetspolished" target="_blank" rel="noopener noreferrer"><img className="pinterest-icon" src="images/pinterest-logo.png" alt="pinterest" /></a>
            <a href="http://www.bloglovin.com/@coffeemeetspolished" target="_blank" rel="noopener noreferrer"><img className="bloglovin-icon" src="images/bloglovin-icon.png" alt="bloglovin" /></a>
          </section>
        </footer>
      </div>
    );
  }
}

class SubscribeForm extends Component {
  render() {
    return(
        <div className="contact-form">
          <h4>Subscribe for Weekly Updates!</h4>
          <form>          
            <input id="name" type="text" placeholder="First Name" />    
            <input id="email" type="email" placeholder="Email" />
            <button>Submit</button>
          </form>
        </div>
      );
  }
}

export default Footer