function ServiceCard({ src, heading, text }) {
	return (
		<div className="bg-white w-full sm:w-[48%] md:w-[23%] mb-5 md:mb-0 px-5 py-10 rounded hover:-mt-5 hover:mb-5 transition-all duration-300 ease-in-out">
			<div data-aos="zoom-in">
				<img className="w-[45px]" src={src} alt="card-icon" />
				<h3 className="text-navy text-2xl font-jost font-bold hover:text-skyBlue mb-5">
					<a href="#">{heading}</a>
				</h3>
				<p className="text-darkish">{text}</p>
			</div>
		</div>
	);
}

export default ServiceCard;
