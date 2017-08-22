import React from 'react';
import ArticleProfile from '../layout/ArticleProfile.js';

const ArticlePage = props => (
	
      <main className="article-page">
      
        {props.articles.map(function(article){
          return <ArticleProfile key={article.id} title={article.title} date={article.date} post={article.post} category={article.category} />
        })}

      </main>
)

export default ArticlePage;