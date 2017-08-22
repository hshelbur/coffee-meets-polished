import React, { Component } from 'react';

class SocialForm extends Component {
  render() {
    return(

      <div className="social-form">
          
        <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />

        <div id="mc_embed_signup">
          <form action="//coffeemeetspolished.us16.list-manage.com/subscribe/post?u=1242ec8cf431dc6b8e8ddb9dc&amp;id=256c307a06" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                
                <div className="mc-field-group">
                  <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                  <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                </div>
                
                <div className="mc-field-group">
                  <label for="mce-FNAME">First Name </label>
                  <input type="text" value="" name="FNAME" className="" id="mce-FNAME" />
                </div>
                
                <div className="mc-field-group">
                  <label for="mce-LNAME">Last Name </label>
                  <input type="text" value="" name="LNAME" className="" id="mce-LNAME" />
                </div>
                
                <div className="mc-field-group size1of2">
                  <label for="mce-BIRTHDAY-month">Birthday </label>
                  <div className="datefield">
                    <span className="subfield monthfield"><input className="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month" /></span> / 
                    <span className="subfield dayfield"><input className="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day" /></span> 
                    <span className="small-meta nowrap">( mm / dd )</span>
                  </div>
                </div>

                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response"></div>
                  <div className="response" id="mce-success-response"></div>
                </div>   

                <div aria-hidden="true"><input type="text" name="b_1242ec8cf431dc6b8e8ddb9dc_256c307a06" tabindex="-1" value="" /></div>
                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
              </div>
          </form>
        </div>


          <section className="social-icons">
            <a href="http://www.facebook.com/Coffee-Meets-Polished-1734113920215832/" target="_blank" rel="noopener noreferrer">
              <img className="facebook-icon" src="images/facebook-icon.png" alt="facebook" />
            </a>
            <a href="http://www.instagram.com/coffeemeetspolished/" target="_blank" rel="noopener noreferrer">
              <img className="instagram-icon" src="images/instagram-icon.png" alt="instagram" />
            </a>
            <a href="http://www.pinterest.com/coffeemeetspolished" target="_blank" rel="noopener noreferrer">
              <img className="pinterest-icon" src="images/pinterest-icon.png" alt="pinterest" />
            </a>
            <a href="http://www.bloglovin.com/@coffeemeetspolished" target="_blank" rel="noopener noreferrer">
              <img className="bloglovin-icon" src="images/bloglovin-icon.png" alt="bloglovin" />
            </a>
          </section>
      </div>

    );
  }
}

export default SocialForm