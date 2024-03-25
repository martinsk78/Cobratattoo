import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import ContactContent from "../components/contact/ContactContent";
import Footer from "../components/footer/Footer";
function Contact() {
	useEffect(() => {
		document.querySelector(".contactFirst").scrollIntoView();
	});
	return (
		<div className="contactFirst">
			<Navbar />
			<ContactContent />
			<Footer />
		</div>
	);
}

export default Contact;
