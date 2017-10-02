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
						<li><NavLink to={{pathname: "/articles/21"}}>National Coffee Day: My Caffeine Routine</NavLink></li>
						<li><NavLink to={{pathname: "/articles/19"}}>Futile Pursuit of Balance: Set Boundaries Instead</NavLink></li>
						<li><NavLink to={{pathname: "/articles/18"}}>7 Things I’m Excited For This Fall</NavLink></li>
						<li><NavLink to={{pathname: "/articles/22"}}>5 Things I Loved in September</NavLink></li>	
					</ul>
				</nav>
			</div>
		);
	}
}

export default PopularPosts