import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./footer.css"; // Archivo SCSS para los estilos
import { Link } from "react-router-dom";

function Footer() {
	const whatsAppLink =
		"https://api.whatsapp.com/send/?phone=%2B543624634755&text&type=phone_number&app_absent=0";
	const instagramLink = "https://www.instagram.com/cobratattooink/";
	return (
		<div className="footer">
			<div className="footer-content">
				<div className="footer-content__logo" />
				<div className="footer-content__text">
					<h2>Nuestras redes</h2>
					<div className="social-icons">
						<Link to={whatsAppLink} target="_blank">
							<FaWhatsapp className="icon" />
						</Link>
						<Link to={instagramLink} target="_blank">
							<FaInstagram className="icon" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
