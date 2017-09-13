import React, { Component } from 'react';

class ArticlePreview extends Component {
  render() {

    const {title, date, category, description, photo} = this.props

    return(
        <article className="preview">
          <h2 className="article-title">{title}</h2>
          <h3 className="article-timestamp"><time>{date}</time></h3>
          <p className="category"><a href={`/${category.toLowerCase()}`}>{category}</a></p>
          <div className="article-preview">
            <img src={photo} alt="Article Preview" />
            <p>{description}</p>
          </div>
        </article>
    );
  }
}

export default ArticlePreview