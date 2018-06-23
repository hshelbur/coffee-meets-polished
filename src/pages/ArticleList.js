import React from 'react';
import Pagination from '../pagination';
import ArticlePreview from '../layout/ArticlePreview.js';

 
class ArticleList extends React.Component {
    constructor(props) {
        super(props);

        const articles = props.articles
 
        this.state = {
            articles: articles,
            pageOfArticles: []
        };
 
        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }
 
    onChangePage(pageOfArticles) {
        // update state with new page of items
        this.setState({ pageOfArticles: pageOfArticles });
    }
 
    render() {
        return (
	        <main className="article-page">
	            {this.state.pageOfArticles.map(article =>
	                <ArticlePreview key={article.id} title={article.title} date={article.date} post={article.post} description={article.description} photo={article.photo} category={article.category} />
	            )}
	            <Pagination items={this.state.articles} onChangePage={this.onChangePage} />
	        </main>
        );
    }
}
 
export default ArticleList;