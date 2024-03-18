import React, { useEffect, useState } from "react";
import { ArrowBack, ArrowForward, ArrowUpward } from "@mui/icons-material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import { GoScreenNormal } from "react-icons/go";

// Update with the correct path and file extension
import "./artist.css";
import { useParams } from "react-router";

export default function Artist({
	handleScroll,
	name,
	description,
	img,
	video,
	tattoos,
	titleName,
	points,
}) {
	const [showTattoos, setShowTattoos] = useState(false);
	const [tattooSelected, setTattooSelected] = useState(null);
	const [currentTattoos, setCurrentTattoos] = useState([]);
	const [introSkip, setIntroSkip] = useState(false);
	const artist = {
		titleName: titleName,
		name: name,
		description: description,
		img: img,
		video: video,
		tattoos: tattoos,
		points: points,
	};
	const urlArtistName = useParams().name;
	console.log(urlArtistName);
	useEffect(() => {
		if (urlArtistName && urlArtistName !== "-") {
			const element = document.querySelector(`#${urlArtistName}`);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			} else {
				console.error(`Element with ID "${urlArtistName}" not found.`);
			}
			// Adjust the delay as needed
		}
	}, [urlArtistName]);
	const selectTattoo = (img) => {
		setTattooSelected(img);

		setCurrentTattoos(
			artist.tattoos[
				Math.floor(
					artist.tattoos
						.flat()
						.indexOf(img.substring(4, img.length - 1)) / 3
				)
			]
		);
	};
	const showTattoo = () => {
		setShowTattoos(!showTattoos);
		if (showTattoo) {
			setTattooSelected(false);
		}
	};
	const switchSecondaryTattoos = (exe) => {
		let mainImg = document.querySelector(
			".selected-tattoo-container__mainImg"
		);
		let mainImgBackground = document.querySelector(
			".selected-tattoo-container__mainImg"
		).style.backgroundImage;
		let currentIndex = currentTattoos.indexOf(
			mainImgBackground.substring(5, mainImgBackground.length - 2)
		);
		console.log(currentIndex);
		if (exe === "prev") {
			if (currentIndex === 0) {
				mainImg.style.backgroundImage = `url(${currentTattoos[2]})`;
				console.log(`url('${currentTattoos[2]}')`);
			} else {
				mainImg.style.backgroundImage = `url(${
					currentTattoos[currentIndex - 1]
				})`;
			}
		} else {
			if (currentIndex === 2) {
				mainImg.style.backgroundImage = `url(${currentTattoos[0]})`;
			} else {
				mainImg.style.backgroundImage = `url(${
					currentTattoos[currentIndex + 1]
				})`;
			}
		}
	};
	const selectSecondaryTattoo = (e) => {
		let mainImg = document.querySelector(
			".selected-tattoo-container__mainImg"
		);
		mainImg.style.backgroundImage = `url(${e.target.src.slice(
			e.target.src.indexOf("/static")
		)})`;
	};
	return (
		<div className="artist" id={artist.name}>
			<span>
				{/* <GoScreenNormal
					onClick={() => {
						document
							.querySelector(`#${artist.name}`)
							.scrollIntoView();
					}}
					className="screenFixer"
				/> */}
			</span>
			<div
				className="artist-intro"
				style={
					introSkip
						? { height: "0", fontSize: "0" }
						: { height: "100%" }
				}
			>
				<div className="artist-intro__video">
					<video autoPlay muted loop>
						<source src={video} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="artist-intro__text">
					<div className="artist-intro__text-headings">
						<h2>{artist.titleName}</h2>
						<h3 style={{ fontWeight: 200 }}>{artist.style}</h3>
					</div>
					<span>
						<ArrowUpward
							onClick={() => {
								setIntroSkip(!introSkip);
							}}
							style={
								introSkip
									? {
											transform: "rotate(180deg)",
											opacity: "1",
										}
									: {}
							}
						/>
					</span>
				</div>
			</div>
			<div
				className="blackScreen"
				style={introSkip ? { opacity: 1 } : { opacity: 0 }}
			>
				<div
					className="artist-info"
					style={{
						opacity: showTattoos ? 0 : 1,
						display: showTattoos ? "none" : "flex",
						zIndex: showTattoos ? 0 : 1000,
					}}
				>
					<div className="artist-info-text">
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "4rem",
							}}
						>
							<h2 className="artist-info-text__name">
								{artist.name}
							</h2>
							<points className={`point ${artist.name}1 `}>
								{points[2].name}
							</points>
							<points className={`point ${artist.name}2`}>
								{points[1].name}
							</points>
							<points className={`point ${artist.name}3`}>
								{points[0].name}
							</points>
						</div>
						<p className="artist-info-text__description">
							{artist.description}
						</p>

						<button class="button" onClick={showTattoo}>
							<span class="button-text">Portafolio</span>
							<div class="fill-container"></div>
						</button>
					</div>
					<div className="artist-info__img">
						<img
							src={artist.img}
							alt="tatuadora tatuaje minimalista"
						/>
					</div>
				</div>

				<div
					className="artist-tattoos"
					style={
						showTattoos
							? {
									opacity: "1",
									cursor: "pointer",
									zIndex: "1999",
								}
							: { opacity: "0", cursor: "auto", zIndex: "0" }
					}
				>
					<span>
						<ArrowBack onClick={() => setShowTattoos(false)} />
					</span>
					<div className="artist-tattoos-grid">
						{artist.tattoos.map((tattoo, id) => {
							return (
								<div
									className="artist-tattoos-grid__cell"
									id={id}
									style={
										Boolean(tattooSelected)
											? {
													backgroundImage: `url(${tattoo[0]})`,
													opacity: "0.5",
												}
											: {
													opacity: "1",
													backgroundImage: `url(${tattoo[0]})`,
												}
									}
									onClick={() => {
										selectTattoo(`url(${tattoo[0]})`);
									}}
								></div>
							);
						})}
						<div
							className="selected-tattoo"
							style={
								Boolean(tattooSelected)
									? { display: "flex" }
									: { display: "none" }
							}
						>
							<div className="selected-tattoo-container">
								<span>
									<ArrowBack
										onClick={() =>
											switchSecondaryTattoos("prev")
										}
									/>
								</span>
								<div
									className="selected-tattoo-container__mainImg"
									style={{ backgroundImage: tattooSelected }}
								>
									<span>
										<HighlightOffIcon
											onClick={() => {
												setTattooSelected(null);
											}}
										/>
									</span>
								</div>
								<span>
									<ArrowForward
										onClick={() =>
											switchSecondaryTattoos("")
										}
									/>
								</span>
							</div>
							{artist.tattoos.map((tattoo) => {
								if (`url(${tattoo[0]})` === tattooSelected) {
									return (
										<div className="selected-tattoo__secondaryImg">
											<img
												src={tattoo[0]}
												alt=""
												onClick={(e) =>
													selectSecondaryTattoo(e)
												}
											/>
											<img
												src={tattoo[1]}
												alt=""
												onClick={(e) =>
													selectSecondaryTattoo(e)
												}
											/>
											<img
												src={tattoo[2]}
												alt=""
												onClick={(e) =>
													selectSecondaryTattoo(e)
												}
											/>
										</div>
									);
								}
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
