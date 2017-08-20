import React, { Component } from 'react';

class ContactInfo extends Component {
  render() {
    return(
        <section className="contact-info">
   			<h1>CONTACT</h1>
   			<img src="images/contact-me.jpg" alt="Contact Me" />
          	<p>Thanks for stopping by Coffee Meets Polished! Please reach out to me whether it's for feedback on a post, topic suggestions, general requests, or simply to connect. I'd love to network and collaborate.</p>
          	<p><a className="email" href="mailto:coffeemeetspolished@gmail.com">coffeemeetspolished@gmail.com</a></p>
        </section>
      );
  }
}

export default ContactInfo;