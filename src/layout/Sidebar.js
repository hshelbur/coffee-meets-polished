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
            <li><a href="https://www.instagram.com/p/BZmLP-XFzTs/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/21980892_332939873843900_6499227628514312192_n.jpg" alt="Woman Up" /></a></li>
            <li><a href="https://www.instagram.com/p/BZja-IZljWd/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/21985257_405925013138929_33851497707995136_n.jpg" alt="Gucci Future" /></a></li>
            <li><a href="https://www.instagram.com/p/BZZYonKlmzb/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/21909646_1455952754519577_444656529635803136_n.jpg" alt="Scars To Your Beautiful" /></a></li>           
            <li><a href="https://www.instagram.com/p/BZUF4cfFkuJ/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e15/21879698_274932853009064_927119809542356992_n.jpg" alt="Women Books" /></a></li>
            <li><a href="https://www.instagram.com/p/BZQ4lUPFqnM/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/21827241_882339711913636_1035612285462118400_n.jpg" alt="Wicked Future" /></a></li>
            <li><a href="https://www.instagram.com/p/BZPj1hVlFln/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/21820423_1077452382390077_856598357802483712_n.jpg" alt="ColourPop" /></a></li>
            <li><a href="https://www.instagram.com/p/BZOXth8FfB6/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/21690501_117038152306952_7398162183328104448_n.jpg" alt="Eleanor Roosevelt" /></a></li>
            <li><a href="https://www.instagram.com/p/BZMUx7hlLqw/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/21690350_1211677382311048_2579914136615911424_n.jpg" alt="Book Blind Date" /></a></li> 
            <li><a href="https://www.instagram.com/p/BZLmdMBlEiX/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/21819915_1520870901334038_9068728805899632640_n.jpg" alt="Oxygen Mask" /></a></li>
          </ul>  

        </section>
      );
  }
}

export default Sidebar