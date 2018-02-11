import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


class PopularPosts extends Component {
	render() {
		return(
			<div className="popular-posts">
				<h3>Popular Posts</h3>
				<nav>
					<ul>
						<a href="/articles/favorite-podcasts-in-january-2018"><img src="/images/podcastsofjanuary.png" alt="favorite-podcasts-in-january-2018" /></a>
						<a href="/articles/19-before-2019-a-goal-setting-challenge"><img src="/images/19before2019.png" alt="19-before-2019-a-goal-setting-challenge" /></a>
						<a href="/articles/topics-to-normalize-in-2018-periods"><img src="/images/normalizedconvoperiods.png" alt="topics-to-normalize-in-2018-periods" /></a>
						<a href="/articles/hopeful-for-in-2018"><img src="/images/hopefulfor2018.png" alt="hopeful-for-in-2018" /></a>
						<a href="/articles/mental-health-resolutions-for-2018"><img src="/images/mentalhealthresolutions.png" alt="mental-health-resolutions-for-2018" /></a>
					</ul>
				</nav>
			</div>
		);
	}
}

export default PopularPosts