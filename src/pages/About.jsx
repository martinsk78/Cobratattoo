import React, { useEffect } from "react";
import AboutContent from "../components/about/AboutContent";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Studio from "../components/studio/Studio";

function About() {
	useEffect(() => {
		document.querySelector(".aboutFirst").scrollIntoView();
	});
	return (
		<div className="aboutFirst">
			<Navbar />
			<AboutContent />
			<Studio />
			<Footer />
		</div>
	);
}

export default About;
