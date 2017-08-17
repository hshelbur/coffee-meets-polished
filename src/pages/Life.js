import React, { Component } from 'react';
import ARTICLES from '../data/Articles.js';
import ArticleProfile from '../layout/ArticleProfile.js';

class LifeArticles extends Component {
  render() {
    return(
      <section className="life">
      	<h1>LIFE</h1>

        {ARTICLES.map(function(article){
          if (article.category === 'Life') {
            return <ArticleProfile key={article.id} title={article.title} date={article.date} post={article.post} category={article.category} />; 
          } else{
          	return;
          }
        })}

      </section>
    );
  }
}

export default LifeArticles;