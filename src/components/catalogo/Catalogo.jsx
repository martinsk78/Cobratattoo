import React from "react";
import "./catalogo.css";
import tatuaje from "../../imgs/tattoos/AgosTatuaje1.jpg";
function Catalogo() {
	const tatuajes = new Array(20);
	tatuajes.fill(tatuaje);
	console.log(tatuajes);
	return (
		<div className="catalogo">
			<h2>Portafolio</h2>
			<div className="catalogo-container">
				<div className="catalogo-container_artista">
					<h3>Agostina</h3>
					<div className="catalogo-container_artista--tatuajes">
						{tatuajes.map((tattoo) => {
							return (<img src={tattoo} alt="" />);
						})}
					</div>
				</div>
				<div className="catalogo-container_artista">
					<h3>Gabriel</h3>
					<div className="catalogo-container_artista--tatuajes">
						{tatuajes.map((tattoo) => {
							return <img src={tattoo} alt="" />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Catalogo;
