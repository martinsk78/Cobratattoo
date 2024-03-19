import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Navbar({ handleScroll }) {
	const navigate = useNavigate();
	const location = useLocation();
	const [invert, setInvert] = useState(false);
	const [showMenu, setShowMenu] = useState(false)
	const [deviceWidth, setDeviceWidth] = useState(0)
	// Check if the current path is "/tattoos" and update invert state accordingly
	useEffect(() => {
		if (location.pathname === "/tattoos") {
			setInvert(true);
		} else {
			setInvert(false);
		}
		setDeviceWidth(window.innerWidth)
	}, [location.pathname]);
	console.log(deviceWidth)
	return (
		
deviceWidth > 600 ? (<nav className='nav'>
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
</nav>) : (<nav className='nav'>
<img
	src={require("../../imgs/logo/CobratattoLogo.png")}
	alt="logo"
/>
{showMenu ? (<><ul className="nav__lista">
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
</ul></>):<></>}
<FaBars className="faBars" onClick={()=>setShowMenu(!showMenu)} />


</nav>) 
	);
}
