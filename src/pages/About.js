import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
      return(
        <article className="about-me">
          <img src="images/about-me.jpg" alt="Coffee Cup" />
          <h1>ABOUT</h1>
          <p>Welcome to Coffee Meets Polished, a forum to embrace all facets of our identity, from our first coffee of the day, to our more polished selves.</p>
          <p>My name is Erin and I'm an introvert, millenial, and self-proclaimed feminist with a career as a pharmacist and leader. In June 2017, I completed a residency program that was an ironic experience where you're too swamped to focus on yourself but get broken to the point where you learn a lot about who you are. Through the serial burnout and rising from the ashes I was empowered to embrace my strengths (and many quirks), seek and accept help, and pursue personal passions - not just professional ones.</p>
          <p>Right after residency, I embarked on a job as a pharmacist which took me to Manhattan. Now that I'm past official training and in New York City, I am determined to set new boundaries and decide my own path.</p>
          <p>I created this blog in my late-20's to share my quest to embrace identity, intersections, empowerment, and avenues for change. It’s my hope that you may be able to relate or find tools that will work for you. Thanks for joining, and welcome!</p> 
        </article>
      );
    }
}

export default AboutMe;