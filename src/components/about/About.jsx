import React, { useState, useEffect } from "react";
import "./about.css";
import videoAbout from "../../imgs/videos/videoTatuando.mp4";

export default function About() {
	return (
		<div className="container about">
			<div className="about_main blackScreen">
				<div
					className="about_main-info"
					// style={visible ? { opacity: "1" } : { opacity: "0" }}
				>
					<h2>Sobre Nosotros</h2>
					<p>
						Hace cinco años, una pareja apasionada por el arte y la
						tinta decidió embarcarse en un viaje que cambiaría sus
						vidas para siempre. Desde modestos comienzos en su
						propio living, Cobra Tattoo Studio se dedicó a unir su
						amor por el tatuaje con su estilo de vida vegano y su
						pasión por las plantas. El resultado de esta unión es un
						estudio de tatuajes único y acogedor que te invitamos a
						explorar.
					</p>
					<h3>Nuestra Historia</h3>
					<p>
						El amor por el tatuaje y el compromiso con el veganismo
						siempre han sido los pilares de Cobra Tattoo Studio.
						Hace cinco años, tomaron la valiente decisión de
						convertir su living en un estudio de tatuajes, donde se
						centraron en crear obras de arte corporales que reflejen
						su profundo respeto por la vida y la naturaleza.
					</p>
				</div>
				<div
					className="about_main-video"
					// style={visible ? { opacity: "1" } : { opacity: "0" }}
				>
					<video autoPlay muted loop>
						<source src={videoAbout} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
			<span className="intro_line"></span>
		</div>
	);
}
