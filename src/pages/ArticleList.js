import React from 'react';
import ArticlePreview from '../layout/ArticlePreview.js';

const ArticleList = props => (
	
      <main className="article-page">
      
        {props.articles.map(function(article){
          return <ArticlePreview key={article.id} title={article.title} date={article.date} post={article.post} description={article.description} photo={article.photo} category={article.category} />
        })}

      </main>
)

export default ArticleList;