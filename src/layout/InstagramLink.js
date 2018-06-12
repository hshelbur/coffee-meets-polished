import React, { Component } from 'react';

class InstagramLink extends Component {
  render() {

    const {title} = this.props

    return(
      <div className="instagram-link">
        <h2 className="instagram-link-title">{title}</h2>
      </div>
    );
  }
}

export default InstagramLink