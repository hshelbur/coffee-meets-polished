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
          <h1><a href="https://www.instagram.com/coffeemeetspolished/" target="_blank" rel="noopener noreferrer">Follow CMP on Instagram!</a></h1>
          <ul>
            <li><a href="https://www.instagram.com/p/Bd1FG2-FSmZ/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-lga3-1.cdninstagram.com/vp/6d5180e1c90861a968bef3b2037bfe46/5AEC5F5E/t51.2885-15/s640x640/sh0.08/e35/c131.0.817.817/26181465_516266095425805_8671453453530169344_n.jpg" alt="Onassis Reservoir" /></a></li>
            <li><a href="https://www.instagram.com/p/BdvECNQFIk6/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/491eea575f207a2d87d49257d9c1139b/5AF9AF99/t51.2885-15/e35/c236.0.608.608/26067682_145475966156118_5247507655462748160_n.jpg" alt="Favorite Podcasts of 2017" /></a></li>
            <li><a href="https://www.instagram.com/p/BdsYeGjlB-A/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/c22b37464932fa95c5465d8e50856179/5AFEA06F/t51.2885-15/e35/26182715_137711430229939_238351928805818368_n.jpg" alt="Viola Davis Golden Globes Quote" /></a></li>
            <li><a href="https://www.instagram.com/p/BdsRFu_FVE_/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/b4a765b546277e8654f7611e41f6d8b3/5ADCBFD4/t51.2885-15/e35/26152466_149531222366742_3114753065228435456_n.jpg" alt="Oprah Golden Globes Quote" /></a></li>
            <li><a href="https://www.instagram.com/p/Bdqb_gHlt6N/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/fc43ab93072003e08101f8bf8a4a48dd/5AF48479/t51.2885-15/e35/26155111_2038410373073002_5846877411135717376_n.jpg" alt="Why I Wear Black" /></a></li>
            <li><a href="https://www.instagram.com/p/Bdp7QIPF15J/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/7d022781ca34937c4249c7e3ce20b474/5AE780EB/t51.2885-15/e35/26071130_522001954866188_4828507065724960768_n.jpg" alt="Suzie Maisel" /></a></li>
            <li><a href="https://www.instagram.com/p/BdkkjcSF0As/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/25024413_1146469365519921_9176108133670453248_n.jpg" alt="Reversibility" /></a></li>
            <li><a href="https://www.instagram.com/p/BdgAJMlFydJ/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/26066362_417811585304142_2488683958892494848_n.jpg" alt="Ambition" /></a></li>
            <li><a href="https://www.instagram.com/p/Bdc79o4FsZK/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/25024471_394928254275669_6165963807299469312_n.jpg" alt="Hoda Today Show" /></a></li>
          </ul>  
        </section>
      </div>
      );
  }
}

export default Sidebar