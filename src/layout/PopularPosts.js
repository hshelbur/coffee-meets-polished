import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


class PopularPosts extends Component {
	render() {
		return(
			<div className="popular-posts">
				<h3>Popular Posts</h3>
				<nav>
					<ul>
						<li><NavLink to={{pathname: "/articles/20"}}>10 Places to Start to Improve Your Feminism Literacy</NavLink></li>
						<li><NavLink to={{pathname: "/articles/19"}}>Futile Pursuit of Balance: Set Boundaries Instead</NavLink></li>
						<li><NavLink to={{pathname: "/articles/25"}}>Everything You Need to Know About Getting the Flu Vaccine</NavLink></li>
						<li><NavLink to={{pathname: "/articles/3"}}>10 Tips for Orienting Yourself to a New Job</NavLink></li>
						<li><NavLink to={{pathname: "/articles/13"}}>How to Set Smart Goals for Yourself</NavLink></li>	
					</ul>
				</nav>
			</div>
		);
	}
}

export default PopularPosts