import React, { Component } from 'react';

class ArticleProfile extends Component {
  render() {

    const {title, date, post, category} = this.props

    return(
        <article className="article">
          <h2 className="article-title">{title}</h2>
          <h3 className="article-timestamp"><time>{date}</time></h3>
          <p className="category"><a href={`/${category.toLowerCase()}`}>{category}</a></p>
          <div className="article-copy">
            <p>{post}</p>
          </div>
          <div className="article-footer">
            <p>A post about <a href={`/${category.toLowerCase()}`}>{category}</a></p>
          </div>
        </article>
    );
  }
}

export default ArticleProfile