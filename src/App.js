import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './layout/Header.js';
import SocialForm from './layout/SocialForm.js';
import Sidebar from './layout/Sidebar.js';
import AboutMe from './pages/About.js';
import ContactInfo from './pages/Contact.js';
import ArticlePage from './pages/ArticlePage.js';
import ARTICLES from './data/Articles.js';

const App = () => (
  <Router>
    <div>

      <Header />
      <body className="container">

        <div className="row">
          <main className="col-md-8 col-lg-9">

            <Switch>

            <Route exact path="/" render={() =>           
                <ArticlePage articles={ARTICLES} />
              } />

            <Route path="/home" render={() =>           
                <ArticlePage articles={ARTICLES} />
              } />

            <Route path="/contact" render={() =>
                <ContactInfo />
              } />

            <Route path="/about" render={() =>
                <AboutMe />
              } />

            <Route path="/life" render={() =>           
                <ArticlePage articles={ARTICLES.filter((article) => article.category === 'Life')} />
              } />

            <Route path="/wellness" render={() =>           
                <ArticlePage articles={ARTICLES.filter((article) => article.category === 'Wellness')} />
              } />

            <Route path="/career" render={() =>           
                <ArticlePage articles={ARTICLES.filter((article) => article.category === 'Career')} />
              } />

            <Route path="/beauty" render={() =>           
                <ArticlePage articles={ARTICLES.filter((article) => article.category === 'Beauty')} />
              } />

            <Route path="/food" render={() =>           
                <ArticlePage articles={ARTICLES.filter((article) => article.category === 'Food')} />
              } />

            <Route path="/articles/:id" render={({match}) => {

              const {id} = match.params
              const matches = ARTICLES.filter(article => article.id === id)
              return matches.length > 0 
                ? <ArticlePage articles={matches} />
                : <h1>Sorry, Article Not Found</h1>
            }} />


                const {id} = match.params
                const matches = ARTICLES.filter(article => article.id === id)
                return matches.length > 0 
                  ? <ArticlePage articles={matches} />
                  : <h1>Sorry, Article Not Found</h1>
            }} />

            </Switch>

            </main>
          
          <aside className="col-md-4 col-lg-3 side-bar">
            <Sidebar />
          </aside>

        </div>


      </body>

      <footer>
        <SocialForm />
        <p className="developed-by">Designed and Developed by <a href="https://www.linkedin.com/in/howard-shelburne/" target="_blank" rel="noopener noreferrer">Howard Shelburne</a>, Freelance Web Developer</p>
      </footer>

    </div>
  </Router>
);

export default App;
