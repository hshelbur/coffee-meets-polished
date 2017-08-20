import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
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

            <Route exact path="/" render={() =>           
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

            <Route path="/career" render={() =>           
                <ArticlePage articles={ARTICLES.filter((article) => article.category === 'Career')} />
              } />

            <Route path="/beauty" render={() =>           
                <ArticlePage articles={ARTICLES.filter((article) => article.category === 'Beauty')} />
              } />

            <Route path="/food" render={() =>           
                <ArticlePage articles={ARTICLES.filter((article) => article.category === 'Food')} />
              } />
            </main>
          
          <aside className="col-md-4 col-lg-3 side-bar">
            <Sidebar />
          </aside>

        </div>


      </body>

      <footer>
        <SocialForm />
      </footer>

    </div>
  </Router>
);

export default App;
