import React from "react";
import Navbar from "../components/navbar/Navbar";
import Intro from "../components/intro/Intro";
import HomeFillContent from "../components/homeFillContent/HomeFillContent";
import Footer from "../components/footer/Footer";

function home() {
	function handleScroll(element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
	return (
		<div>
			<Navbar handleScroll={handleScroll} />
			<Intro handleScroll={handleScroll} />
			<Footer />
		</div>
	);
}

export default home;
