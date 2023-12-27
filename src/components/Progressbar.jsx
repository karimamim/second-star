function Progressbar({ language, parcent }) {
	return (
		<>
			<p className="mb-1  font-semibold flex justify-between italic text-navy">
				<span>{language}</span>
				<span>{parcent}</span>
			</p>
			<div className="w-full bg-gray-200  h-2.5 mb-4 dark:bg-gray-700">
				<div
					className="animate-goProgress bg-navy h-2.5  dark:bg-gray-300"
					style={{ width: parcent }}
				></div>
			</div>
		</>
	);
}

export default Progressbar;
