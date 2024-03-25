import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Intro from "../components/intro/Intro";
import Footer from "../components/footer/Footer";

function Home() {
	useEffect(() => {
		document.querySelector(".homeFirst").scrollIntoView();
	});
	function handleScroll(element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
	return (
		<div className="homeFirst">
			<Navbar handleScroll={handleScroll} />
			<Intro handleScroll={handleScroll} />
			<Footer />
		</div>
	);
}

export default Home;
