import up_arrow from "../assets/images/angle-up-svgrepo-com.svg";
import down_arrow from "../assets/images/angle-down-svgrepo-com.svg";
import { useState } from "react";

function Accordion({ text, hiddenText }) {
	const [isActive, setActive] = useState(false);

	const handleClick = () => {
		setActive(!isActive);
	};

	const dynamicClassName = isActive ? "text-blue" : "text-dark";
	return (
		<div className="w-full">
			<button
				onClick={handleClick}
				className={`w-[-webkit-fill-available] flex gap-2 justify-between  font-semibold hover:text-skyBlue active:text-skyBlue  mb-2 ${dynamicClassName}`}
			>
				{text}
				{isActive ? (
					<img src={up_arrow.src} alt="up-arrow" />
				) : (
					<img src={down_arrow.src} alt="down-arrow" />
				)}
			</button>

			{isActive && (
				<p className="text-darkish transition-all duration-400 ease-in-out">
					{hiddenText}
				</p>
			)}
		</div>
	);
}

export default Accordion;
