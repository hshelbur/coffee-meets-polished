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
              <p>Coffee Meets Polished is a lifestyle + career blog written by me, Erin. I'm an introvert, pharmacist, and self-proclaimed feminist. This blog empowers us to celebrate who we are, from our first coffee of the day to our more polished selves.</p>
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
          <h1><a href="https://www.instagram.com/coffeemeetspolished/" target="_blank" rel="noopener noreferrer">CMP on Instagram</a></h1>
          <ul>
            <li><a href="https://www.instagram.com/p/BdazD4SlMjs/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/25023124_157427324881914_5994481980966699008_n.jpg" alt="New Year Quote" /></a></li>
            <li><a href="https://www.instagram.com/p/BdVgqvQFl6g/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/25037163_533901853662799_2276854020075159552_n.jpg" alt="Word of the Year" /></a></li>
            <li><a href="https://www.instagram.com/p/BdSvpQjlOm6/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/26070397_787847958065678_3011191971973693440_n.jpg" alt="28 Things" /></a></li>
            <li><a href="https://www.instagram.com/p/BdRDRUGFY0A/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/26283577_152295902089335_2973516617637429248_n.jpg" alt="Mental Health Resolutions" /></a></li>
            <li><a href="https://www.instagram.com/p/BdNy-ubFpA5/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/s150x150/e35/c94.0.756.756/26066039_1566101906778343_290277924500668416_n.jpg" alt="Feminist Book List" /></a></li>
            <li><a href="https://www.instagram.com/p/BcddnP0lwgB/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/25013518_1838665726425294_230539456308838400_n.jpg" alt="Teen Vogue HRC" /></a></li>
            <li><a href="https://www.instagram.com/p/BccuAB4lqV7/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/25012147_155318878530739_3267322535649214464_n.jpg" alt="Happy Friday" /></a></li>
            <li><a href="https://www.instagram.com/p/BcaHO7rloHF/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/25015602_503435870042952_8591173999302541312_n.jpg" alt="Power of Millenials" /></a></li>
            <li><a href="https://www.instagram.com/p/BcZrgVIl_JE/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/25016713_1977670172445609_8120436096078184448_n.jpg" alt="Bad Feminist Quote" /></a></li>
          </ul>  
        </section>
      </div>
      );
  }
}

export default Sidebar