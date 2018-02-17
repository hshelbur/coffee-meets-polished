import React, { Component } from 'react';


class SocialForm extends Component {
  render() {
    return(
      <div className="social-form">
          <section className="social-icons">
            <a href="http://www.instagram.com/coffeemeetspolished/" target="_blank" rel="noopener noreferrer">
              <img className="instagram-icon" src="/images/instagram-icon.png" alt="instagram" />
            </a>
            <a href="http://www.pinterest.com/coffeemeetspolished" target="_blank" rel="noopener noreferrer">
              <img className="pinterest-icon" src="/images/pinterest-icon.png" alt="pinterest" />
            </a>
            <a href="http://www.bloglovin.com/@coffeemeetspolished" target="_blank" rel="noopener noreferrer">
              <img className="bloglovin-icon" src="/images/bloglovin-icon.png" alt="bloglovin" />
            </a>
          </section>
      </div>
    );
  }
}

export default SocialForm