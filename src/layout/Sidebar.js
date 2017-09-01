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
          <h1><a href="https://www.instagram.com/coffeemeetspolished/" target="_blank" rel="noopener noreferrer">CMP on Instagram</a></h1>
          <ul>
            <li><a href="https://www.instagram.com/p/BYdPGnGFz_T/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/21147890_891788184307130_4383195596526190592_n.jpg" alt="FemThings Thigh Gap" /></a></li>
            <li><a href="https://www.instagram.com/p/BYbuRA2FdJZ/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/21148011_1101996869930610_4884461508815224832_n.jpg" alt="Exist To Be Happy" /></a></li>           
            <li><a href="https://www.instagram.com/p/BYVviXolbEV/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/21042863_268857223617795_4280809039387951104_n.jpg" alt="Morning Coffee" /></a></li>
            <li><a href="https://www.instagram.com/p/BYTpNsMlCCw/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/21041596_319542045123421_8424633910800941056_n.jpg" alt="Sunday Self-Care" /></a></li>
            <li><a href="https://www.instagram.com/p/BYRpQ8JlWsc/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/21107613_1909038832646983_8527901090853683200_n.jpg" alt="Welcome" /></a></li>
          </ul>  

        </section>
      );
  }
}

export default Sidebar