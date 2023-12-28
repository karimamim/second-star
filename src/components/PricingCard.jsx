import tick from "../assets/images/tick-svgrepo-com.svg";
import cross from "../assets/images/cross-svgrepo-com.svg";

function PricingCard({ price, plan }) {
	const dynamicClassName =
		plan === "Business" ? "border-t-[4px] border-blue" : "";
	return (
		<div
			data-aos="zoom-in"
			className={`mb-10 md:mb-0 shadow-xl px-8 py-14 rounded-xl ${dynamicClassName}`}
		>
			<h3 className="text-navy font-bold text-xl font-jost mb-5">
				{plan} Plane
			</h3>
			<h4 className="flex text-navy text-5xl font-jost">
				<span className="text-xl font-bold">$</span>
				{price}
			</h4>
			<p className="text-blue font-jost text-lg mb-6">per month</p>
			<ul className="mb-8">
				<li className="mb-3 flex gap-3 items-centers text-darkish font-poppins">
					<img src={tick.src} alt="tick" />
					Quam adipiscing vitae proin
				</li>
				<li className="mb-3 flex gap-3 items-centers text-darkish font-poppins">
					<img src={tick.src} alt="tick" />
					Nec feugiat nisl pretium
				</li>
				<li className="mb-3 flex gap-3 items-centers text-darkish font-poppins">
					<img src={tick.src} alt="tick" />
					Nulla at volutpat diam uteera
				</li>

				{price === 0 ? (
					<li className="mb-3 flex gap-3 items-centers text-darkish font-poppins line-through">
						<img src={cross.src} alt="cross" />
						Pharetra massa massa ultricies
					</li>
				) : (
					<li className="mb-3 flex gap-3 items-centers text-darkish font-poppins">
						<img src={tick.src} alt="tick" />
						Pharetra massa massa ultricies
					</li>
				)}
				{price === 0 ? (
					<li className="mb-3 flex gap-3 items-centers text-darkish font-poppins line-through">
						<img src={cross.src} alt="cross" />
						Massa ultricies mi quis hendrerit
					</li>
				) : (
					<li className="mb-3 flex gap-3 items-centers text-darkish font-poppins">
						<img src={tick.src} alt="tick" />
						Massa ultricies mi quis hendrerit
					</li>
				)}
			</ul>
			{plan === "Business" ? (
				<button class="px-7 py-3 outline outline-1 outline-blue font-jost bg-blue text-white rounded-3xl font-bold">
					Get Started
				</button>
			) : (
				<button class="px-7 py-3 outline outline-1 outline-blue font-jost hover:bg-blue hover:text-white rounded-3xl font-bold text-blue  transition duration-200">
					Get Started
				</button>
			)}
		</div>
	);
}

export default PricingCard;
