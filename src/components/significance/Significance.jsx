import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../imgs/backgrounds/aboutBackground.webp";
import img2 from "../../imgs/backgrounds/botanicaBackground.webp";
import img3 from "../../imgs/backgrounds/agosTatuandoIntroImg.webp";
import img4 from "../../imgs/backgrounds/aboutBackground2.webp";
import img5 from "../../imgs/backgrounds/aboutBackground1.webp";
import "./significance.css";
import { isMobile } from "react-device-detect";
import useMousePosition from "../../utils/useMousePosition";
import { motion } from "framer-motion";

function Significance() {
	const [maskSize, setMaskSize] = useState(0);
	const [carrouselOption, setCarrouselOption] = useState(0);
	const { x, y } = useMousePosition();
	const carrouselTexts = [
		"Los tatuajes han sido una forma de expresión artística y cultural desde tiempos antiguos, siendo utilizados por diversas civilizaciones como una forma de representar su identidad, creencias y experiencias. Hoy en día, los tatuajes continúan siendo una poderosa forma de expresión personal, con significados que van desde lo simbólico hasta lo estético.",
		"Para muchas personas, los tatuajes representan un símbolo de pertenencia a un grupo o comunidad. Por ejemplo, los tatuajes tribales han sido utilizados durante siglos por diferentes culturas para marcar la identidad de pertenencia a una tribu o clan específico, mientras que los tatuajes militares son comunes entre los soldados como una muestra de unidad y camaradería.",
		"Los tatuajes también pueden ser una forma de expresar la creatividad y el amor por el arte. Muchos artistas y amantes del diseño corporal eligen tatuajes que reflejan su aprecio por diferentes estilos artísticos, desde el realismo hasta el arte abstracto, convirtiendo su cuerpo en un lienzo vivo.",
		"Además de representar la pertenencia a un grupo, los tatuajes también pueden tener significados personales y emocionales profundos. Muchas personas eligen tatuarse símbolos que representan experiencias significativas en sus vidas, como fechas importantes, citas inspiradoras o imágenes que representan a seres queridos.",
		"Sin embargo, es importante tener en cuenta que los tatuajes pueden tener diferentes significados según la cultura y la persona que los lleve. Lo que puede ser un símbolo de fuerza y valentía para una persona, puede tener un significado completamente diferente para otra. En última instancia, los tatuajes son una forma única y personal de expresión que puede tener múltiples capas de significado para quien los lleva.",
	];
	const [typedHeading, setTypedHeading] = useState("");
	const [typedSubHeading, setTypedSubHeading] = useState("");

	useEffect(() => {
		const typeText = (text, setTextState) => {
			let index = 0;
			const interval = setInterval(() => {
				setTextState((prevText) => prevText + text[index]);
				index++;
				if (index === text.length) {
					clearInterval(interval);
				}
			}, 70); // adjust the typing speed here (milliseconds)
		};

		// Start typing when component mounts
		typeText("Los tatuajes", setTypedHeading);
		setTimeout(() => {
			typeText(
				" Más que un poco de tinta en la piel",
				setTypedSubHeading
			);
		}, 1000); // Start typing subheading after 1 second

		const handleScroll = () => {
			// Adjust this value to set the scroll threshold for making the text visible
			const element = document.querySelector(".significance-carousel"); // For example, set the threshold to 200px from the top

			// Check if the scroll position is greater than the threshold
			if (window.scrollY > element.getBoundingClientRect().y) {
				element.style.opacity = 1;
				// Stop listening to the scroll event
				window.removeEventListener("scroll", handleScroll);
			}
		};

		// Add event listener to the scroll event
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="significance" onMouseEnter={() => setMaskSize(1200)}>
			<div className="significance-intro">
				<h2>{typedHeading}</h2>
				<h3>{typedSubHeading}</h3>
			</div>
			<div className="significance-content" style={{ cursor: "none" }}>
				<div
					style={{
						display: "none !important",
						WebkitMaskPosition: `${x - maskSize / 2}px ${
							y - maskSize / 2.0
						}px`,
						WebkitMaskSize: `${maskSize}px`,
					}}
					alt="mask1"
					className="significance-content-bgimage"
					onClick={(e) => {
						if (isMobile) {
							const element = document.querySelector(
								".significance-content-bgimage"
							).style;
							element.WebkitMaskSize = "2000px";
							element.WebkitMaskPosition = "center";
						}
					}}
				>
					<h4>
						Y en este estudio lo sabemos a la perfeccion, valorando
						cada trabajo al maximo
					</h4>
				</div>

				<h4>
					Los tatuajes son expresiones profundas de identidad y
					significado personal, cada uno contando una historia única.
				</h4>
			</div>
			<div className="significance-carousel">
				<h3>Te contamos un poco...</h3>
				<div className="significance-carousel-container">
					<div className="significance-carousel-img-container">
						<FaArrowLeft
							style={{ cursor: "pointer" }}
							onClick={() => {
								const carouselContent = document.querySelector(
									".significance-carousel-container__content"
								);
								const imgWidth = document.querySelector(
									".significance-carousel-container__content--imgs img"
								).clientWidth;
								carouselContent.scrollLeft -= imgWidth;
								setCarrouselOption(
									carrouselOption > 0
										? carrouselOption - 1
										: carrouselOption
								);
							}}
						/>

						<div className="significance-carousel-container__content">
							<div className="significance-carousel-container__content--imgs">
								<img src={img1} alt="" />

								<img src={img2} alt="" />
								<img src={img3} alt="" />
								<img src={img4} alt="" />
								<img src={img5} alt="" />
							</div>
						</div>
						<FaArrowRight
							style={{ cursor: "pointer" }}
							onClick={() => {
								const carouselContent = document.querySelector(
									".significance-carousel-container__content"
								);
								const imgWidth = document.querySelector(
									".significance-carousel-container__content--imgs img"
								).clientWidth;
								carouselContent.scrollLeft += imgWidth;
								setCarrouselOption(
									carrouselOption < 4
										? carrouselOption + 1
										: carrouselOption
								);
							}}
						/>
					</div>
					<p>{carrouselTexts[carrouselOption]}</p>
				</div>
			</div>
		</div>
	);
}

export default Significance;
