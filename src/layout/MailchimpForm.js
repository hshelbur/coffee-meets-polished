import React, { Component } from 'react';


class MailchimpForm extends Component {
  render() {
    return(
         
      <div id="mc_embed_signup">
        <form action="//coffeemeetspolished.us16.list-manage.com/subscribe/post?u=1242ec8cf431dc6b8e8ddb9dc&id=256c307a06" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">

            
            <div className="mc-field-group">
              <input type="email" placeholder="Email" name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
            <div className="mc-field-group">
              <input type="text" placeholder="First Name" name="FNAME" className id="mce-FNAME" />
            </div>
          
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{display: 'none'}} />
              <div className="response" id="mce-success-response" style={{display: 'none'}} />
            </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_1242ec8cf431dc6b8e8ddb9dc_256c307a06" tabIndex={-1} defaultValue /></div>
            <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
          </div>
        </form>
      </div>
      
      );
  }
}

export default MailchimpForm;