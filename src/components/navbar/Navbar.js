import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ handleScroll }) {
	const navigate = useNavigate();
	const location = useLocation();
	const [invert, setInvert] = useState(false);

	// Check if the current path is "/tattoos" and update invert state accordingly
	useEffect(() => {
		if (location.pathname === "/tattoos") {
			setInvert(true);
		} else {
			setInvert(false);
		}
	}, [location.pathname]);

	return (
		<nav className={`nav`}>
			<img
				src={require("../../imgs/logo/CobratattoLogo.png")}
				alt="logo"
			/>
			<ul className="nav__lista">
				<li
					className="nav__lista-item"
					onClick={() => {
						navigate("/");
					}}
				>
					Inicio
				</li>
				<li
					className="nav__lista-item"
					onClick={() => {
						navigate("/artists/-");
					}}
				>
					Artistas
				</li>
				<li
					className="nav__lista-item"
					onClick={() => {
						navigate("/about");
					}}
				>
					Sobre nosotros
				</li>
				<li
					className="nav__lista-item"
					onClick={() => {
						navigate("/tattoos");
					}}
				>
					Portafolio
				</li>
				<li
					className="nav__lista-item"
					onClick={() => {
						navigate("/contact");
					}}
				>
					Contacto
				</li>
			</ul>
		</nav>
	);
}
