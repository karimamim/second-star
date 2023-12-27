function TeamCard({ src, name, role, text }) {
	return (
		<div className="hover:-mt-2 hover:mb-2  bg-white px-6 py-8 rounded w-full mb-5 md:mb-0 lg:w-[48%] items-center transition-all duration-300 ease-in-out">
			<div data-aos="zoom-in" className="md:flex gap-10">
				<img
					className="mb-4 md:mb-0 w-20 md:w-40 rounded-[150px]"
					src={src}
					alt="team member"
				/>
				<div>
					<h3 className="text-2xl md:text-3xl text-navy font-jost font-bold mb-2">
						{name}
					</h3>
					<p className="text-sm text-dark font-poppins mb-1 md:text-base">
						{role}
					</p>
					<hr className="text-blueWhite w-20 mb-4" />
					<p className=" text-darkGray mb-4 text-sm">{text}</p>
					<div className="flex gap-3">
						<a href="#">
							<svg
								className="bg-blueWhite p-2 rounded-3xl hover:bg-blue hover:fill-white transition duration-300"
								fill="#37517E"
								height="35px"
								width="35px"
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 310 310"
								xml:space="preserve"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0" />

								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>

								<g id="SVGRepo_iconCarrier">
									<g id="XMLID_834_">
										<path
											id="XMLID_835_"
											d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
										/>
									</g>
								</g>
							</svg>
						</a>
						<a href="#">
							<svg
								className="bg-blueWhite p-2 rounded-3xl hover:bg-blue hover:fill-white transition duration-300"
								fill="#37517E"
								height="35px"
								width="35px"
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 310 310"
								xml:space="preserve"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0" />

								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>

								<g id="SVGRepo_iconCarrier">
									<g id="XMLID_826_">
										<path
											id="XMLID_827_"
											d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73 c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783 c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598 C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467 c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977 c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889 c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597 c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961 c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895 c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367 c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998 C307.394,57.037,305.009,56.486,302.973,57.388z"
										/>
									</g>
								</g>
							</svg>
						</a>
						<a href="#">
							<svg
								className="bg-blueWhite p-2 rounded-3xl hover:bg-blue hover:fill-white transition duration-300"
								fill="#37517E"
								height="35px"
								width="35px"
								viewBox="0 0 256 256"
								id="Flat"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0" />

								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>

								<g id="SVGRepo_iconCarrier">
									<path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z" />
								</g>
							</svg>
						</a>
						<a href="#" className="bg-blueWhite rounded-3xl">
							<svg
								className="bg-blueWhite p-2 rounded-2xl hover:bg-blue hover:fill-white transition duration-300"
								fill="#37517E"
								height="35px"
								width="35px"
								viewBox="0 0 32 32"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0" />

								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>

								<g id="SVGRepo_iconCarrier">
									<title>linkedin</title>
									<path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z" />
								</g>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TeamCard;
