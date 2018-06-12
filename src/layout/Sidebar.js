import React, {Component} from 'react'
import SocialForm from './SocialForm.js'
import MailchimpForm from  './MailchimpForm.js';
import PopularPosts from './PopularPosts.js'

class Sidebar extends Component {
  render() {
    return(
        <div className="side-bar">
            <section className="about">
              <img className="profile-picture" src="/images/sidebar-about.jpg" alt="Erin"/>
              <p>Coffee Meets Polished is an empowerment forum to celebrate who we are, from our first coffee of the day to our more polished selves. My name is Erin, and I'm a NYC Content Creator, introvert, pharmacist, and self-proclaimed feminist. I hope you stick around and join the CMP community!</p>
            </section>
            <SocialForm />
            <MailchimpForm />
            <PopularPosts />
            <InstagramPhotos />
        </div>
      );
  }
}

class InstagramPhotos extends Component {
  render() {
    return(
      <div className="instagram-photos">
        <section> 
          <h1><a href="https://www.instagram.com/coffeemeetspolished/" target="_blank" rel="noopener noreferrer">Follow CMP on Instagram!</a></h1>
          <ul>

          </ul>  
        </section>
      </div>
      );
  }
}

export default Sidebar