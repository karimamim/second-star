import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { motion, stagger } from "framer-motion";

const Hamburger = ({ nav }) => {
	const [isMobileNav, setMobileNav] = useState(false);

	const handleClick = () => {
		setMobileNav(!isMobileNav);
	};

	return (
		<>
			<button onClick={handleClick} className="text-white md:hidden">
				<MenuIcon size={30} />
			</button>
			{isMobileNav && (
				<motion.ul
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.3,
					}}
					className="p-8 fixed top-0 left-0 h-screen w-full bg-white text-center z-50"
				>
					<div className="flex justify-end">
						<button onClick={handleClick}>
							<X size={30} />
						</button>
					</div>
					{nav.map((navItem) => (
						<motion.li
							initial={{ opacity: 0, scale: 0.5, x: 300 }}
							animate={{ opacity: 1, scale: 1, x: 0, delay: 3 }}
							transition={{ duration: 0.5 }}
							key={Math.random()}
							className="mt-10 md:m-0"
						>
							<a href={navItem.path} className="font-semibold tracking-wide">
								{navItem.text}
							</a>
						</motion.li>
					))}
				</motion.ul>
			)}
		</>
	);
};

export default Hamburger;
