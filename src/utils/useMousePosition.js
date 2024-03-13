import { useState, useEffect } from "react";

function useMousePosition() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [contentAbsoluteY, setContentAbsoluteY] = useState(0);
	const updateMousePosition = (e) => {
		setMousePosition({ x: e.pageX, y: e.pageY - contentAbsoluteY });
	};
	useEffect(() => {
		setContentAbsoluteY(
			document
				.querySelector(".significance-content")
				.getBoundingClientRect().y
		);
	}, []);
	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	});

	return mousePosition;
}

export default useMousePosition;
