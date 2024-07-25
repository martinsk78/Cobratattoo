import { React, useState } from "react";
import gatoCute from "../../imgs/videoGatoCute.gif";
import {
  Instagram,
  LocalPhone,
  AddLocationAlt,
  Email,
} from "@mui/icons-material";
import "./contact.css";

export default function Contact() {
  const [nya, setNya] = useState('');
  const [tattooer, setTattooer] = useState('');
  const [date, setDate] = useState('');
  const [tattooPlace, setTattooPlace] = useState('');
  const [description, setDescription] = useState('');

  const handleNyaChange = (event) => setNya(event.target.value);
  const handleTattooerChange = (event) => setTattooer(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleTattooPlaceChange = (event) => setTattooPlace(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const createWhatsappMessage = () => {
    const message = `Hola, me gustaría agendar una cita para un tatuaje.\n\nNombre y Apellido: ${nya}\nTatuador: ${tattooer}\nFecha Aproximada: ${date}\nLugar del Tatuaje: ${tattooPlace}\nDescripción: ${description}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/543624520089?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact">
      <section className="contact-intro">
        <img
          src={require("../../imgs/logo/CobratattoLogo.webp")}
          alt="logo"
        />
      </section>
      <section className="contact-form">
        <form className="contact-form__content" onSubmit={createWhatsappMessage}>
          <label htmlFor="NyA-input">
            NOMBRE Y APELLIDO
            <input
            required
              placeholder="Nombre completo"
              type="text"
              name="NyA"
              id="NyA-input"
              value={nya}
              onChange={handleNyaChange}
            />
          </label>
          <label htmlFor="tatuador-input">
            TATUADOR
            <select required name="tatuador" id="tatuador-input" value={tattooer}
              onChange={handleTattooerChange}>
              <option value="Agostina">Agostina</option>
              <option value="Gabriel">Gabriel</option>
            </select>
          </label>
          <label htmlFor="fecha-input">
            FECHA APROXIMADA
            <select required name="fecha" id="fecha-input" value={date}
              onChange={handleDateChange}>
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
            <input required
              type="text"
              name="lugar"
              id="lugar-input"
              placeholder="Antebrazo, cuello, mano, etc."
              value={tattooPlace}
              onChange={handleTattooPlaceChange}
            />
          </label>
          <label htmlFor="descripcion-input">
            DESCRIPCION DEL TATUAJE
            <textarea required
              rows="1"
              cols="20"
              placeholder="Me gustaria que el tatuaje sea... "
              type="text"
              name="descripcion"
              id="descripcion-input"
              value={description}
              onChange={handleDescriptionChange}
            />
          </label>
          <button className="contact-input__button">
            - Enviar mensaje de whatsapp -
          </button>
        </form>
      </section>
    </div>
  );
}
