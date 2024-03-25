import React, { useState } from "react";
import "./catalogo.css";
import tatuaje1 from "../../imgs/tattoos/AgosTatuaje1.jpg";
import tatuaje2 from "../../imgs/tattoos/AgosTatuaje2.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function Catalogo() {
	const [showBigTattoo, setShowBigTattoo] = useState(false);
	const [currentTattoo, setCurrentTattoo] = useState("");
	const tattoos = new Array(20);
	tattoos[0] = tatuaje1;
	tattoos.fill(tatuaje2, 1, tattoos.length - 1);
	console.log(tattoos);
	return (
		<div className="catalogo">
			<h2>Portafolio</h2>
			<div className="catalogo-container">
				<div className="catalogo-container_artista">
					<h3>Agostina</h3>
					<div className="catalogo-container_artista--tatuajes">
						{tattoos.map((tattoo) => {
							return (
								<img
									src={tattoo}
									alt=""
									onClick={() => {
										setShowBigTattoo(true);
										setCurrentTattoo(tattoo);
									}}
								/>
							);
						})}
					</div>
				</div>
				<div className="catalogo-container_artista">
					<h3>Gabriel</h3>
					<div className="catalogo-container_artista--tatuajes">
						{tattoos.map((tattoo) => {
							return (
								<img
									src={tattoo}
									alt=""
									onClick={() => {
										setShowBigTattoo(true);
										setCurrentTattoo(tattoo);
									}}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div
				className="bigTattoo"
				style={
					showBigTattoo ? { display: "flex" } : { display: "none" }
				}
			>
				<div className="bigTattoo-content">
					<FaArrowLeft
						style={{ cursor: "pointer" }}
						onClick={() => {
							console.log(currentTattoo);
							setCurrentTattoo(
								tattoos.indexOf(currentTattoo) > 0
									? tattoos[
											tattoos.indexOf(currentTattoo) - 1
										]
									: currentTattoo
							);
						}}
					/>
					<div className="bigTattoo-content-img">
						<img src={currentTattoo} alt="tatuaje" />
						<HighlightOffIcon
							style={{ cursor: "pointer" }}
							className="closeIcon"
							onClick={() => {
								setShowBigTattoo(false);
								setCurrentTattoo(null);
							}}
						/>
					</div>
					<FaArrowRight
						style={{ cursor: "pointer" }}
						onClick={() => {
							setCurrentTattoo(
								tattoos.indexOf(currentTattoo) <
									currentTattoo.length - 1
									? tattoos[
											tattoos.indexOf(currentTattoo) + 1
										]
									: currentTattoo
							);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Catalogo;
