import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home() {
	return (
	<>
		<Navbar />
		<Jumbotron />
		<div className="row row-cols-1 row-cols-md-4 g-4 card-container d-flex">
		<Card />
		<Card />
		<Card />
		<Card />
		</div>
		<Footer />
	</>
	);
}

export default Home;
