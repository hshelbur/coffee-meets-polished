import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


class PopularPosts extends Component {
	render() {
		return(
			<div className="popular-posts">
				<h3>Popular Posts</h3>
				<nav>
					<ul>
						<a href="/articles/58"><img src="/images/hopefulfor2018.png" alt="HopefulFor2018" /></a>
						<a href="/articles/57"><img src="/images/favoritepodcastsof2017.png" alt="Favorite Podcasts of 2017" /></a>
						<a href="/articles/56"><img src="/images/19before2019.png" alt="19 Before 2019" /></a>
						<a href="/articles/55"><img src="/images/highsof2017preview.png" alt="Highs of 2017" /></a>
						<a href="/articles/54"><img src="/images/lovedindecember.png" alt="5 Things I Loved in December" /></a>
						<a href="/articles/53"><img src="/images/mentalhealthresolutions.png" alt="Mental Health Resolutions" /></a>
					</ul>
				</nav>
			</div>
		);
	}
}

export default PopularPosts