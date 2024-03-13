import React, { useEffect } from "react";
import "./intro.css";
import { useNavigate } from "react-router";
export default function Intro({ handleScroll }) {
	const navigate = useNavigate();
	return (
		<div className="intro_container">
			<div className="background">
				<div
					className="background__agos"
					onClick={() => {
						navigate("/artists/Agostina");
					}}
				/>
				<div
					className="background__gabi"
					onClick={() => {
						navigate("/artists/Gabriel");
					}}
				/>
			</div>
			<span
				className="intro_circle"
				onClick={() => {
					navigate("/about");
				}}
			></span>
			<span className="intro_line"></span>
		</div>
	);
}
