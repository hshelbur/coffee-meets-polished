import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


class PopularPosts extends Component {
	render() {
		return(
			<div className="popular-posts">
				<h3>Popular Posts</h3>
				<nav>
					<ul>
						<a href="/articles/podcasts-on-the-plane-barcelona-edition"><img src="/images/planepodcasts-preview.png" alt="podcasts-on-the-plane-barcelona-edition" /></a>
						<a href="/articles/when-i-stopped-apologizing-for-needing-solitude"><img src="/images/solitude-preview.png" alt="when-i-stopped-apologizing-for-needing-solitude" /></a>
						<a href="/articles/19-before-2019-a-goal-setting-challenge"><img src="/images/19before2019.png" alt="19-before-2019-a-goal-setting-challenge" /></a>
						<a href="/articles/topics-to-normalize-in-2018-periods"><img src="/images/normalizedconvoperiods.png" alt="topics-to-normalize-in-2018-periods" /></a>
						<a href="/articles/10-affordable-date-night-ideas-in-nyc"><img src="/images/affordabledatenight-preview.png" alt="10-affordable-date-night-ideas-in-nyc" /></a>
						<a href="/articles/10-essential-tips-for-your-first-protest"><img src="/images/protest-preview.png" alt="10-essential-tips-for-your-first-protest" /></a>
					</ul>
				</nav>
			</div>
		);
	}
}

export default PopularPosts