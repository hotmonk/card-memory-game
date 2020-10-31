import React from "react";
import Auth from "../../containers/Auth/Auth";
import classes from "./LandingPage.module.css";

function LandingPage() {
	return (
		<div className={classes.Body}>
			<div className={classes.Intro}>
				<h1>MATCH THE CARDS</h1>
				<div className={classes.Img}>

				</div>
				<h3>
					It's a memory based game. You will be given a set of cards
					and you have to find the pairs in the minimum moves.
				</h3>
			</div>
			<div>

				
				<Auth />
			</div>
		</div>
	);
	//sample comment that you dont need to see 
	//sample comment that you dont need to see 
	//sample comment that you dont need to see 
	//sample comment that you dont need to see 
	//sample comment that you dont need to see 
	//sample comment that you dont need to see 
}

export default LandingPage;
