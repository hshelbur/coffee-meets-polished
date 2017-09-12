import React, { Component } from 'react';

class ArticlePreview extends Component {
  render() {

    const {title, date, category, description, photo} = this.props

    return(
        <article className="preview">
          <h2 className="article-title">{title}</h2>
          <h3 className="article-timestamp"><time>{date}</time></h3>
          <p><a href={`/${category.toLowerCase()}`}>{category}</a></p>
          <div className="article-preview">
            <p>{description}</p>
            <img src={photo} alt="Article Preview" />
          </div>
        </article>
    );
  }
}

export default ArticlePreview