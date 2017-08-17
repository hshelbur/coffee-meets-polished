import React, { Component } from 'react';

class ArticleProfile extends Component {
  render() {
    return(
        <article className="article">
          <header>
            <h1>{this.props.title}</h1>
            <h2>Published <time>{this.props.date}</time></h2>
          </header>
          <p>{this.props.post}</p>
          <footer>
            <p>A post about {this.props.category}</p>
          </footer>
        </article>
    );
  }
}

export default ArticleProfile