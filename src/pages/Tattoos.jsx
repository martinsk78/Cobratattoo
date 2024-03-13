import React from "react";
import Significance from "../components/significance/Significance";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Catalogo from "../components/catalogo/Catalogo";
function Tattoos() {
	return (
		<div>
			<Navbar />
			<Significance />
			<Catalogo />
			<Footer />
		</div>
	);
}

export default Tattoos;
