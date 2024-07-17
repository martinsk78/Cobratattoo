import React from "react";
import "./homeFillContent.css";
import agosPhoto from "../../imgs/backgrounds/agosTatuandoIntroImg.webp";
import logo from "../../imgs/logo/CobratattoLogo.webp";
function HomeFillContent() {
	return (
		<div className="container fill">
			<div className="fill-cobra">
				<span className="intro-circle" />
			</div>
			<div className="fill-artists">
				<div
					className="fill-artists__artist"
					style={{ borderBottom: "1px solid rgb(100,100,100)" }}
				>
					<img
						alt="tattooer"
						src={agosPhoto}
						style={{ marginRight: "4rem" }}
					/>
					<div className="fill-artists__artist--text">
						<h2>Agostina</h2>
						<p>
							¡Hola! Soy Agostina, una tatuadora apasionada y
							defensora de un estilo de vida sostenible. Mis
							tatuajes combinan microrealismo, líneas finas y
							elementos botánicos para crear obras únicas y
							emotivas. Comprometida con la ética, soy vegana en
							todos los aspectos de mi vida.
						</p>
						<span>Ver mas...</span>
					</div>
				</div>

				<div className="fill-artists__artist">
					<div className="fill-artists__artist--text">
						<h2 style={{ placeSelf: "end" }}>Gabriel</h2>
						<p style={{ textAlign: "end" }}>
							Soy Gabriel, un tatuador apasionado comprometido con
							el veganismo en todas sus formas. Me especializo en
							tatuajes inspirados en el mundo del anime y el
							tatuaje tradicional, fusionando la modernidad con la
							historia del arte del tatuaje.
						</p>
						<span>Ver mas...</span>
					</div>
					<img
						alt="tattooer"
						src={agosPhoto}
						style={{ marginLeft: "4rem" }}
					/>
				</div>
			</div>
		</div>
	);
}

export default HomeFillContent;
