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
            <li><a href="https://www.instagram.com/p/BfRRUPgFKQy/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/6137d3c59ded89d44cdde4e35b9eb245/5B098AF4/t51.2885-15/s640x640/sh0.08/e35/c0.3.1080.1080/27577260_1595217100559865_127330176710213632_n.jpg" alt="Javelinas Tex Mex Margarita" /></a></li>
            <li><a href="https://www.instagram.com/p/BfO0rv0ldEG/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/f980e67eb5c221cdaccb9680035f0ec5/5B1FC579/t51.2885-15/s640x640/sh0.08/e35/28151890_2059343347439428_5812467447420157952_n.jpg" alt="Bitch Face Doesn't Rest" /></a></li>
            <li><a href="https://www.instagram.com/p/BfJD0Y_lRwC/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/bd84db584ea6f5d1ac753d2bcdf372c0/5B204E8A/t51.2885-15/s640x640/sh0.08/e35/27579750_924208791085793_6888372964274733056_n.jpg" alt="Valentine's Day" /></a></li>
            <li><a href="https://www.instagram.com/p/BfG1mdrFI39/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/e1b7a0cc71098d7ad41e3c45f23a5d92/5B0D523A/t51.2885-15/s640x640/sh0.08/e35/27575476_1552413481502382_1403706380187074560_n.jpg" alt="Seems Impossible Until It's Finished" /></a></li>
            <li><a href="https://www.instagram.com/p/Be_ek6LFjKo/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/1bf6f1fffa296e66d305545426d2a833/5B0E8780/t51.2885-15/s640x640/sh0.08/e35/27575191_2231955667031231_4738298811045117952_n.jpg" alt="Cancun Margarita" /></a></li>
            <li><a href="https://www.instagram.com/p/Be8W_4ilxBp/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/4658e05bddc312d2872f1132fff7146a/5B049A65/t51.2885-15/s640x640/sh0.08/e35/27575295_526695681049196_6298382433628717056_n.jpg" alt="Not Until We Are Lost" /></a></li>
            <li><a href="https://www.instagram.com/p/Be5wZFzlTSb/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/bdb914b9096a8e588478018ebf55d355/5B02B195/t51.2885-15/s640x640/sh0.08/e35/27579771_1431145227008474_7561720069877661696_n.jpg" alt="Wednesdays Are For Wine" /></a></li>
            <li><a href="https://www.instagram.com/p/Be3zFPTFfgD/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/80c1e880c3a4aba4f735f0458b0a53a4/5B07E7F5/t51.2885-15/s640x640/sh0.08/e35/26872875_1524076577712633_7729560038821330944_n.jpg" alt="PT Barnum Quote" /></a></li>
            <li><a href="https://www.instagram.com/p/Be0kzM3l3nA/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/vp/ba21188c56f5cd6e57577f80e7346d92/5B025A89/t51.2885-15/s640x640/sh0.08/e35/27574826_127701351378743_332272362374299648_n.jpg" alt="Hammock Day" /></a></li>
          </ul>  
        </section>
      </div>
      );
  }
}

export default Sidebar