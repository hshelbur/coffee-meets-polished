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
            <li><a href="https://www.instagram.com/p/Bb5TjKxFK_r/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/23823779_764021277118588_499602261001895936_n.jpg" alt="Thanksgiving Apple" /></a></li>
            <li><a href="https://www.instagram.com/p/BbrqUbFFiTe/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/23667703_337674183365822_3156829343703891968_n.jpg" alt="Anne Hathaway Human" /></a></li>
            <li><a href="https://www.instagram.com/p/BbmwyZllBmE/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.83.890.890/23596420_1940122296230030_161855533312114688_n.jpg" alt="MM Vanity Fair" /></a></li>
            <li><a href="https://www.instagram.com/p/BbZrv_aloIy/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/23498803_266358270554182_9134640250197377024_n.jpg" alt="Confucius" /></a></li>
            <li><a href="https://www.instagram.com/p/BbW_WV0F1aW/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/23417109_382399302203460_7725061326866743296_n.jpg" alt="Central Park Fall" /></a></li>
            <li><a href="https://www.instagram.com/p/BbUIygzl8n-/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/23347495_1052823841527486_6374320337345052672_n.jpg" alt="Truthful not Neutral" /></a></li>
            <li><a href="https://www.instagram.com/p/BbRkLpxlfmJ/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/23416896_1778042409155907_1924726513517723648_n.jpg" alt="Roxane Gay" /></a></li>
            <li><a href="https://www.instagram.com/p/BbNRFpxlMjb/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/23279650_295382354298384_684782743791337472_n.jpg" alt="Truth GS" /></a></li>
            <li><a href="https://www.instagram.com/p/BbH7VlelDDI/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/23161687_1012423312230196_6771459032445091840_n.jpg" alt="Gloria Steinem" /></a></li>
          </ul>  
        </section>
      </div>
      );
  }
}

export default Sidebar