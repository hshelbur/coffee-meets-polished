import React, { Component } from 'react';
import ARTICLES from '../data/Articles.js';
import ArticleProfile from '../layout/ArticleProfile.js';

class BeautyArticles extends Component {
  render() {
    return(
      <section className="beauty">
        <h1>BEAUTY</h1>

        {ARTICLES.map(function(article){
          if (article.category === 'Beauty') {
            return <ArticleProfile key={article.id} title={article.title} date={article.date} post={article.post} category={article.category} />; 
          } else{
          	return;
          }
        })}

      </section>
    );
  }
}

export default BeautyArticles;