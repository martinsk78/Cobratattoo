import React, { useRef } from "react";
import "./studio.css";
import video from "../../imgs/videos/360RoomTopur.mp4";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Studio() {
	const studioRef = useRef(null);

	const scrollLeft = () => {
		if (studioRef.current) {
			studioRef.current.scrollBy({
				left: -studioRef.current.offsetWidth,
				behavior: "smooth",
			});
		}
	};

	const scrollRight = () => {
		if (studioRef.current) {
			studioRef.current.scrollBy({
				left: studioRef.current.offsetWidth,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="container studio">
			<div className="blackScreen">
				<FaArrowLeft onClick={scrollLeft} className="arrows" />
				<div className="studio_main" ref={studioRef}>
					<div className="studio_main-info">
						<div className="studio_main-info">
							<div className="studio_main-info--card">
								<div className="studio_main-info--card__content">
									<h3>Nuestro Amado Estudio</h3>
									<p>
										El año pasado, Cobra Tattoo Studio logró
										dar un paso significativo en su viaje al
										conseguir un espacio exclusivamente
										dedicado a su estudio de tatuajes. Este
										nuevo entorno fue diseñado pensando en
										la comodidad de sus clientes y en
										reflejar su estilo de vida vegano. El
										ambiente es cálido y acogedor, con
										detalles que hacen que te sientas como
										en casa. Cada rincón está impregnado de
										su amor por las plantas y la naturaleza.
									</p>
								</div>
								<div className="studio_main-info--card__content">
									<h3>Nuestro Compromiso</h3>
									<p>
										En Cobra Tattoo Studio, no solo
										recibirás un tatuaje excepcional, sino
										también una experiencia única. Cada
										diseño se crea con atención al detalle y
										un profundo respeto por tus deseos
										personales. Además, nuestra ética vegana
										se refleja en nuestros productos y
										prácticas. Utilizamos tintas y
										materiales respetuosos con los animales
										y el medio ambiente, para que puedas
										lucir tu arte con la conciencia
										tranquila.
									</p>
									<p>
										Si buscas una experiencia de tatuaje
										única, realizada por una pareja
										apasionada que ha convertido su estilo
										de vida en una forma de arte, te
										invitamos a visitarnos en [Dirección de
										Cobra Tattoo Studio]. En Cobra Tattoo
										Studio, tu historia se convierte en
										tinta y arte, en un ambiente que celebra
										la vida, la naturaleza y el respeto por
										todas las formas de vida.
									</p>
								</div>
							</div>
							<div className="studio_main-info--card">
								<div className="studio_main-info--card__content">
									<h3>Nuestro Compromiso</h3>
									<p>
										En Cobra Tattoo Studio, no solo
										recibirás un tatuaje excepcional, sino
										también una experiencia única. Cada
										diseño se crea con atención al detalle y
										un profundo respeto por tus deseos
										personales. Además, nuestra ética vegana
										se refleja en nuestros productos y
										prácticas. Utilizamos tintas y
										materiales respetuosos con los animales
										y el medio ambiente, para que puedas
										lucir tu arte con la conciencia
										tranquila.
									</p>
									<p>
										Si buscas una experiencia de tatuaje
										única, realizada por una pareja
										apasionada que ha convertido su estilo
										de vida en una forma de arte, te
										invitamos a visitarnos en [Dirección de
										Cobra Tattoo Studio]. En Cobra Tattoo
										Studio, tu historia se convierte en
										tinta y arte, en un ambiente que celebra
										la vida, la naturaleza y el respeto por
										todas las formas de vida.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<FaArrowRight onClick={scrollRight} className="arrows" />
				<span className="intro_line"></span>
			</div>
		</div>
	);
}
