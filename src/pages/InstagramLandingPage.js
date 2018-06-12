import React from 'react';
import InstagramLink from '../layout/InstagramLink.js';

const InstagramLandingPage = props => (
	
      <main className="link-page">
      
        {props.instagramLinks.map(function(link){
          return <InstagramLink key={link.id} title={link.title} />
        })}

      </main>
)

export default InstagramLandingPage;