import React from 'react';
import InstagramLink from '../layout/InstagramLink.js';

  
const InstagramLandingPage = props => (
      <main className="link-page">
     
        {props.instagramLinks.map(function(link){
          return <a href = {`articles/${link.id}`}><InstagramLink key={link.id} title={link.title} /></a>
        })}

        

      </main>
)

export default InstagramLandingPage;