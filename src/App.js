import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App">
          <h1 className='App-header'>
            <img src="images/logo.jpg" className="App-logo" alt="logo" />
          </h1>
        </header>
        <nav className="Nav-bar">
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="bio">Bio</a></li>
            <li><a href="singup">Sign Up</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

const ARTICLES = [{id: "1", title: "First Post", date: "August 8, 2017", post: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath", image: "images/sunrise.jpg", category: "Morning Thoughts"},
                  {id: "2", title: "Coffee Finger Nails", date: "August 9, 2017", post: "My finger nails look like coffee beans check it out", image: "images/coffee-polish.jpg", category: "Life"}]

class ArticleProfile extends Component {
  render() {
    return(
        <article>
          <header>
            <h3>{this.props.title}</h3>
            <h4>Published <time>{this.props.date}</time></h4>
          </header>
          <p>{this.props.post}</p>
          <img src={this.props.image} />
          <footer>
            <p>A post about {this.props.category}</p>
          </footer>
        </article>
    );
  }
}

class Main extends Component {
  render() {
    return(
      <main>

        {ARTICLES.map(function(article){
          return <ArticleProfile key={article.id} title={article.title} date={article.date} post={article.post} image={article.image} category={article.category} />
        })}

      </main>
    );
  }
}

class ContactForm extends Component {
  render() {
    return(
        <div className="Contact-form">
          <h4>Sign up for regular updates!</h4>
          <form>
            <label for="name">Name: </label>
            <input id="name" type="text" placeholder="John Doe" />
            <label for="email">Email: </label>
            <input id="email" type="email" placeholder="johndoe@email.com" />
            <button>Submit</button>
          </form>
        </div>
      );
  }
}

class Footer extends Component {
  render() {
    return(
      <footer>
        <h1>Follow Me On:</h1>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return(
        <div>
          <Header />
          <Main />
          <ContactForm />
          <Footer />
        </div> 
      )
  }
}

export default App;
