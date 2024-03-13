import React from "react";
import gatoCute from "../../imgs/videoGatoCute.gif";
import {
	Instagram,
	LocalPhone,
	AddLocationAlt,
	Email,
} from "@mui/icons-material";
import "./contact.css";

export default function Contact() {
	return (
		<div className="contact">
			<section className="contact-intro">
				<img
					src={require("../../imgs/logo/CobratattoLogo.png")}
					alt="logo"
				/>
			</section>
			<section className="contact-form">
				<div className="contact-form__content">
					<label htmlFor="NyA-input">
						NOMBRE Y APELLIDO
						<input
							placeholder="Nombre completo"
							type="text"
							name="NyA"
							id="NyA-input"
						/>
					</label>
					<label htmlFor="tatuador-input">
						TATUADOR
						<select name="tatuador" id="tatuador-input">
							<option value="Agostina">Agostina</option>
							<option value="Gabriel">Gabriel</option>
						</select>
					</label>
					<label htmlFor="fecha-input">
						FECHA APROXIMADA
						<select name="fecha" id="fecha-input">
							<option value="enero">Enero</option>
							<option value="febrero">Febrero</option>
							<option value="marzo">Marzo</option>
							<option value="abril">Abril</option>
							<option value="mayo">Mayo</option>
							<option value="junio">Junio</option>
							<option value="julio">Julio</option>
							<option value="agosto">Agosto</option>
							<option value="septiembre">Septiembre</option>
							<option value="octubre">Octubre</option>
							<option value="noviembre">Noviembre</option>
							<option value="diciembre">Diciembre</option>
						</select>
					</label>
					<label htmlFor="lugar-input">
						LUGAR DONDE TE GUSTARIA TATUARTE
						<input
							type="text"
							name="lugar"
							id="lugar-input"
							placeholder="Antebrazo, cuello, mano, etc."
						/>
					</label>
					<label htmlFor="descripcion-input">
						DESCRIPCION DEL TATUAJE
						<textarea
							rows="1"
							cols="20"
							placeholder="Me gustaria que el tatuaje sea... "
							type="text"
							name="descripcion"
							id="descripcion-input"
						/>
					</label>
					<button className="contact-input__button">
						- Enviar mensaje de whatsapp -
					</button>
				</div>
			</section>
		</div>
	);
}
