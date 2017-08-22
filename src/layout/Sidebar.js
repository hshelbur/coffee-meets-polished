import React, {Component} from 'react'
import SocialForm from './SocialForm.js'
import MailchimpForm from  './MailchimpForm';

class Sidebar extends Component {
  render() {
    return(
        <div>
            <section className="about">
              <img className="profile-picture" src="/images/sidebar-about.jpg" alt="Erin"/>
              <p>Coffee Meets Polished is a lifestyle + career blog written by me, Erin. I'm an introvert, millenial, and self-proclaimed feminist. Through this blog I want us to celebrate who we are, from our first coffee of the day to our more polished selves.</p>
            </section>
            <SocialForm />
            <MailchimpForm />
            <InstagramPhotos />
        </div>
      );
  }
}

class InstagramPhotos extends Component {
  render() {
    return(
        <section className="instagram-photos"> 
          <h1><a href="https://www.instagram.com/coffeemeetspolished/" target="_blank">#coffeemeetspolished</a></h1>
          <ul>
            <li><a href="http://www.instagram.com/p/BXBxHIfD4cG/?taken-by=blurrdboundaries" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20347407_350409855392858_6269222461842128896_n.jpg" alt="Moving to NYC" /></a></li>
            <li><a href="https://www.instagram.com/p/BW53iWTjost/?taken-by=blurrdboundaries" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/17077226_1358302127571369_585387932022472704_n.jpg" alt="Groundhog Day" /></a></li>           
            <li><a href="https://www.instagram.com/p/BWq-TAljqlU/?taken-by=blurrdboundaries" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20066893_1911088232464944_7147206612862631936_n.jpg" alt="The Big Move" /></a></li>
          </ul>  

        </section>
      );
  }
}

export default Sidebar