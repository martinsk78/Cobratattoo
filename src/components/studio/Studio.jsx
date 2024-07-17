import React, { useRef, useState } from "react";
import "./studio.css";
import video from "../../imgs/videos/360RoomTopur.mp4";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import bg1 from "../../imgs/backgrounds/tattooBackground.webp";
import bg2 from "../../imgs/IKON/EIKON.webp";
import ikon1 from "../../imgs/IKON/tattooMachine.webp";
import ikon2 from "../../imgs/IKON/tattooMachine2.webp";
import ikon3 from "../../imgs/IKON/tintaIkon.webp";
import studio1 from "../../imgs/studio/estudio1.webp";
import studio2 from "../../imgs/studio/studio2.webp";
import studio3 from "../../imgs/studio/estudio3.webp";
export default function Studio() {
	const studioRef = useRef(null);
	const [background, setBackground] = useState(0);
	const scrollLeft = () => {
		if (studioRef.current) {
			studioRef.current.scrollBy({
				left: -studioRef.current.offsetWidth,
				behavior: "smooth",
			});
		}
		setBackground(0);
	};

	const scrollRight = () => {
		if (studioRef.current) {
			studioRef.current.scrollBy({
				left: studioRef.current.offsetWidth,
				behavior: "smooth",
			});
		}
		setBackground(1);
	};

	return (
		<div
			className="container studio"
			style={{
				backgroundImage: `url(${background === 0 ? bg1 : bg2})`,
			}}
		>
			<div className="blackScreen">
				<FaArrowLeft
					onClick={() => {
						return background === 0 ? null : scrollLeft();
					}}
					className="arrows"
				/>
				<div className="studio_main" ref={studioRef}>
					<div className="studio_main-info">
						<div className="studio_main-info">
							<div className="studio_main-info--card">
								<div className="studio_main-info--card__content">
									<div className="studio_main-info--card__content--text">
										<h3>Nuestro Amado Estudio</h3>
										<p>
											El año pasado, Cobra Tattoo Studio
											logró dar un paso significativo en
											su viaje al conseguir un espacio
											exclusivamente dedicado a su estudio
											de tatuajes. Este nuevo entorno fue
											diseñado pensando en la comodidad de
											sus clientes y en reflejar su estilo
											de vida vegano. El ambiente es
											cálido y acogedor, con detalles que
											hacen que te sientas como en casa.
											Cada rincón está impregnado de su
											amor por las plantas y la
											naturaleza.
										</p>
									</div>
									<div className="studio_main-info--card__content--imgs">
										<img src={studio1} alt="ikon product" />
										<img src={studio2} alt="ikon product" />
										<img src={studio3} alt="ikon product" />
									</div>
								</div>
							</div>
							<div className="studio_main-info--card">
								<div className="studio_main-info--card__content">
									<div className="studio_main-info--card__content--text">
										<h3>Nuestra Elección de EIKON</h3>
										<p>
											En Cobra Tattoo Studio, hemos
											seleccionado a EIKON como nuestro
											proveedor de elementos para
											tatuajes. Su compromiso con la
											calidad y la sostenibilidad nos
											permite ofrecer una experiencia de
											tatuaje excepcional y ética a
											nuestros clientes.
										</p>
									</div>

									<div className="studio_main-info--card__content--imgs">
										<img src={ikon1} alt="ikon product" />
										<img src={ikon2} alt="ikon product" />
										<img src={ikon3} alt="ikon product" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<FaArrowRight
					onClick={() => {
						return background === 1 ? null : scrollRight();
					}}
					className="arrows"
				/>
				<span className="intro_line"></span>
			</div>
		</div>
	);
}
