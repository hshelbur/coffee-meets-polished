import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


class PopularPosts extends Component {
	render() {
		return(
			<div className="popular-posts">
				<h3>Popular Posts</h3>
				<nav>
					<ul>
						<li><NavLink to={{pathname: "/articles/42"}}>➢ Being "Not That" Asian</NavLink></li>
						<li><NavLink to={{pathname: "/articles/39"}}>➢ Orienting Yourself to a New Job: 90-Day Update</NavLink></li>
						<li><NavLink to={{pathname: "/articles/41"}}>➢ Power of Millenials</NavLink></li>
						<li><NavLink to={{pathname: "/articles/32"}}>➢ ”What Are You?” How I’ve Been Asked About My Ethnicity</NavLink></li>
						<li><NavLink to={{pathname: "/articles/20"}}>➢ 10 Places to Start to Improve Your Feminism Literacy</NavLink></li>
						<li><NavLink to={{pathname: "/articles/28"}}>➢ The 5 Toughest Mental Health Lessons from Residency</NavLink></li>
						<li><NavLink to={{pathname: "/articles/19"}}>➢ Futile Pursuit of Balance: Set Boundaries Instead</NavLink></li>
						<li><NavLink to={{pathname: "/articles/35"}}>➢ 28 Things I Would Tell My Younger Self</NavLink></li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default PopularPosts