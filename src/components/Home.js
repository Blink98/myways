import React from "react";
import "../styles/Home.scss";

function Home({ handleShowSignUp }) {
	return (
		<div className="home">
			<h1 className="home__heading">Apply and hear back every time</h1>
			<p className="home__para">
				Exploring internships or jobs? Say good-bye to the typical job portals
				and use the power of Artificial Intelligence to become successful,
				faster.
			</p>
			<div className="home__getStartedBtn" onClick={handleShowSignUp}>
				Get Started
			</div>
		</div>
	);
}

export default Home;
