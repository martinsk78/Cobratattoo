import React, { useEffect } from "react";
import Significance from "../components/significance/Significance";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Catalogo from "../components/catalogo/Catalogo";
function Tattoos() {
	useEffect(() => {
		document.querySelector(".tattoosFirst").scrollIntoView();
	});
	return (
		<div className="tattoosFirst">
			<Navbar />
			<Significance />
			<Catalogo />
			<Footer />
		</div>
	);
}

export default Tattoos;
