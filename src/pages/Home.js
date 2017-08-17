import React, { Component } from 'react';
import ArticleProfile from '../layout/ArticleProfile.js';
import ARTICLES from '../data/Articles.js';



class Home extends Component {
  render() {
    return(
      <main className="home">
      
        {ARTICLES.map(function(article){
          return <ArticleProfile key={article.id} title={article.title} date={article.date} post={article.post} category={article.category} />
        })}

      </main>
    );
  }
}

export default Home;
