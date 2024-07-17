import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Navbar({ handleScroll }) {
	const navigate = useNavigate();
	const location = useLocation();
	const [invert, setInvert] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const [showNavBar, setShowNavBar] = useState(true);
	const [deviceWidth, setDeviceWidth] = useState(0);
	const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

	// Check if the current path is "/tattoos" and update invert state accordingly
	useEffect(() => {
		if (location.pathname === "/tattoos") {
			setInvert(true);
		} else {
			setInvert(false);
		}
		setDeviceWidth(window.innerWidth);
	}, [location.pathname]);

	// Listen for scroll events
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			const isVisible = prevScrollPos > currentScrollPos;

			setShowNavBar(isVisible);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos]);
	return deviceWidth > 600 ? (
		<nav
			className="nav"
			style={
				showNavBar
					? { transform: "translateY(0vh)" }
					: { transform: "translateY(-9vh)" }
			}
		>
			<img
				src={require("../../imgs/logo/CobratattoLogo.webp")}
				alt="logo"
				onClick={() => navigate("/")}
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
	) : (
		<nav
			className="nav"
			style={
				showNavBar
					? { transform: "scale(1)" }
					: { transform: "translateY(-9vh)" }
			}
		>
			<img
				src={require("../../imgs/logo/CobratattoLogo.webp")}
				alt="logo"
				onClick={() => navigate("/")}
			/>
			{showMenu ? (
				<>
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
				</>
			) : (
				<></>
			)}
			<FaBars className="faBars" onClick={() => setShowMenu(!showMenu)} />
		</nav>
	);
}
