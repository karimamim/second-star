import up_arrow from "../assets/images/angle-up-solid-svgrepo-com.svg";
import down_arrow from "../assets/images/down-arrow-backup-2-svgrepo-com.svg";
import { useState } from "react";

function Accordion({ text, hiddenText }) {
	const [isActive, setActive] = useState(false);
	const handleClick = () => {
		setActive(!isActive);
	};
	return (
		<div>
			<button
				onClick={handleClick}
				className="text-dark flex gap-2 items-center justify-between font-semibold hover:text-skyBlue active:text-skyBlue  mb-2"
			>
				{text}
				{isActive ? (
					<img src={up_arrow.src} alt="up-arrow" />
				) : (
					<img src={down_arrow.src} alt="down-arrow" />
				)}
			</button>

			{isActive && (
				<p className="text-darkish transition duration-400 ease-in-out">
					{hiddenText}
				</p>
			)}
		</div>
	);
}

export default Accordion;
