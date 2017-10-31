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
              <p>Coffee Meets Polished is a lifestyle + career blog written by me, Erin. I'm an introvert, pharmacist, and self-proclaimed feminist. Through this blog I want us to celebrate who we are, from our first coffee of the day to our more polished selves.</p>
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
            <li><a href="https://www.instagram.com/p/Ba2IU-rlUq-/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22858462_125711781439671_9173699284082622464_n.jpg" alt="Ingrid Nilsin" /></a></li>
            <li><a href="https://www.instagram.com/p/BauzD3FlBYr/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22710972_107882839979152_2375935733023113216_n.jpg" alt="Hillary Clinton" /></a></li>
            <li><a href="https://www.instagram.com/p/BakSOTPlcbP/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22709552_124726308244606_3162956191861047296_n.jpg" alt="Bad Feminist" /></a></li>
            <li><a href="https://www.instagram.com/p/BajvwaqlW1F/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22638686_1408623982568237_7836771111248330752_n.jpg" alt="Self To-Do List" /></a></li>
            <li><a href="https://www.instagram.com/p/BaeDfcpl-SZ/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22710606_120400781987593_1007411555966386176_n.jpg" alt="Fall Leaves" /></a></li>
            <li><a href="https://www.instagram.com/p/BaW9Q-XFw_7/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22580327_125952768067184_7697977297457905664_n.jpg" alt="Richard Branson" /></a></li>
            <li><a href="https://www.instagram.com/p/BaTxAe2FIDz/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22499763_289451918238672_3694360791609245696_n.jpg" alt="Big Fall Leaf" /></a></li>
            <li><a href="https://www.instagram.com/p/BaRuYECFMRb/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22427572_2106132106280923_6722017546481958912_n.jpg" alt="Where You Are" /></a></li>
            <li><a href="https://www.instagram.com/p/BaPS_yml1R6/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22500348_136877886938874_361555161635618816_n.jpg" alt="Reality Check" /></a></li>         
          </ul>  
        </section>
      </div>
      );
  }
}

export default Sidebar