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
            <li><a href="https://www.instagram.com/p/BZD8TG_FNXI/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/c135.0.809.809/21689419_116491325697659_3623591996997763072_n.jpg" alt="Hate Has No Home" /></a></li>
            <li><a href="https://www.instagram.com/p/BY57OYYFQY6/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/21568774_759454160914888_7975175474584223744_n.jpg" alt="Pooh" /></a></li>
            <li><a href="https://www.instagram.com/p/BY35tnNFXf5/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/21435591_271113166727803_1762277828042162176_n.jpg" alt="Woolf" /></a></li>           
            <li><a href="https://www.instagram.com/p/BY3m_wRFCdz/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/21480157_473261939715035_4468653205059796992_n.jpg" alt="Sunday To Do" /></a></li>
            <li><a href="https://www.instagram.com/p/BYy6qQal1wB/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/21436278_644848835903319_131612349298638848_n.jpg" alt="Marggggsss" /></a></li>
            <li><a href="https://www.instagram.com/p/BYv2aV7lHyH/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/21480335_1707888062851707_5274816384675610624_n.jpg" alt="Moment Present" /></a></li>
            <li><a href="https://www.instagram.com/p/BYssn_eFSlg/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/c11.0.442.442/21435585_1061321107338024_7764850135825121280_n.jpg" alt="Smart Goals" /></a></li>
            <li><a href="https://www.instagram.com/p/BYewUyMFJDl/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/21224088_1508530189186380_6920067572356349952_n.jpg" alt="August Favorites" /></a></li> 
            <li><a href="https://www.instagram.com/p/BYRpQ8JlWsc/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/21107613_1909038832646983_8527901090853683200_n.jpg" alt="Welcome" /></a></li>
          </ul>  

        </section>
      );
  }
}

export default Sidebar