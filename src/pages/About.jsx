import React from "react";
import About from "../components/about/About";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Studio from "../components/studio/Studio";

function about() {
	return (
		<div>
			<Navbar />
			<About />
			<Studio />
			<Footer />
		</div>
	);
}

export default about;
