import React, { Component } from 'react';
import ARTICLES from '../data/Articles.js';
import ArticleProfile from '../layout/ArticleProfile.js';

class CareerArticles extends Component {
  render() {
    return(
      <section className="career">
        <h1>CAREER</h1>

        {ARTICLES.map(function(article){
          if (article.category === 'Career') {
            return <ArticleProfile key={article.id} title={article.title} date={article.date} post={article.post} category={article.category} />; 
          } else{
          	return;
          }
        })}

      </section>
    );
  }
}

export default CareerArticles;