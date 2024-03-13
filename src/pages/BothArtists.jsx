import React, { useEffect } from "react";
import Artist from "../components/artist/Artist";
import agosImg from "../imgs/backgrounds/agosTatuandoIntroImg.jpg";
import gabiImg from "../imgs/backgrounds/gabrielTatuandoIntroImg.jpg";
import videoAgos from "../imgs/videos/videoTatuando2.mp4";
import videoGabi from "../imgs/videos/videoTatuando3.mp4";
import tatuaje1 from "../imgs/tattoos/AgosTatuaje1.jpg";
import tatuaje2 from "../imgs/tattoos/AgosTatuaje2.jpg";
import tatuaje3 from "../imgs/tattoos/AgosTatuaje3.jpg";
import ChooseUs from "../components/chooseUs/ChooseUs";
import IntroArtists from "../components/IntroArtists/IntroArtists";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import { useParams } from "react-router";
function BothArtist() {
	return (
		<div>
			<Navbar />

			<IntroArtists />
			<Artist
				name={"Agostina"}
				titleName={"Agostina"}
				description={
					"¡Hola! Soy Agostina, una tatuadora apasionada y defensora de un estilo de vida sostenible. Mis tatuajes combinan microrealismo, líneas finas y elementos botánicos para crear obras únicas y emotivas. Comprometida con la ética, soy vegana en todos los aspectos de mi vida, desde la elección de tinta hasta la ropa que uso. Junto a mi pareja, hemos creado nuestro estudio de tatuajes, donde la creatividad y la excelencia se unen para ofrecerte una experiencia única. ¡Únete a mi comunidad de arte y conciencia! ¡Bienvenido a mi mundo!"
				}
				img={agosImg}
				video={videoAgos}
				tattoos={[
					[tatuaje1, tatuaje2, tatuaje3],
					[tatuaje2, tatuaje2, tatuaje2],
					[tatuaje3, tatuaje3, tatuaje3],
					[tatuaje2, tatuaje2, tatuaje2],
					[tatuaje2, tatuaje2, tatuaje2],
					[tatuaje3, tatuaje3, tatuaje3],
					[tatuaje2, tatuaje2, tatuaje2],
					[tatuaje2, tatuaje2, tatuaje2],
					[tatuaje3, tatuaje3, tatuaje3],
					// Agrega más imágenes según sea necesario
				]}
				points={[
					{ name: "Linea fina" },
					{ name: "Botanica" },
					{
						name: "Microrealismo",
					},
				]}
			/>
			<ChooseUs />
			<Artist
				name={"Gabriel"}
				titleName={"Gabriel"}
				description={
					"Soy Gabriel, un tatuador apasionado comprometido con el veganismo en todas sus formas. Me especializo en tatuajes inspirados en el mundo del anime y el tatuaje tradicional, fusionando la modernidad con la historia del arte del tatuaje. Junto a mi pareja, hemos realizado nuestro sueño de tener nuestro propio estudio de tatuajes, donde la calidad y la satisfacción del cliente son nuestra prioridad. Si compartes mi pasión por el veganismo, el anime y el arte del tatuaje, ¡espero tener la oportunidad de trabajar contigo y convertir tus ideas en tatuajes impresionantes!"
				}
				img={gabiImg}
				video={videoGabi}
				tattoos={[
					[tatuaje1, tatuaje2, tatuaje3],
					[tatuaje2, tatuaje2, tatuaje2],
					[tatuaje3, tatuaje3, tatuaje3],
					[tatuaje2, tatuaje2, tatuaje2],
					[tatuaje2, tatuaje2, tatuaje2],
					[tatuaje3, tatuaje3, tatuaje3],
					[tatuaje2, tatuaje2, tatuaje2],
					[tatuaje2, tatuaje2, tatuaje2],
					[tatuaje3, tatuaje3, tatuaje3],
					// Agrega más imágenes según sea necesario
				]}
				points={[
					{ name: "Tradicional" },
					{
						name: "Anime",
					},
					{ name: "Neotradicional" },
				]}
			/>
			<Footer />
		</div>
	);
}

export default BothArtist;
