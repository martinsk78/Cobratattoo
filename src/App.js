import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BothArtists from "./pages/BothArtists";
import "./App.css";
import Tattoos from "./pages/Tattoos";
import Contact from "./pages/Contact";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/artists/:name" element={<BothArtists />}></Route>
				<Route path="/tattoos" element={<Tattoos />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
			</Routes>
		</Router>
	);
}
