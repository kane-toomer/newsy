import React from "react";

const Sports = () => {
	return (
		<main>
			<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				{/* Page Title */}
				<p className="font-bold text-4xl mt-5 mb-10 ml-3 sm:ml-0">Sports</p>

				{/* Big Headline */}
				<BigHeadline />

				{/* News Story Grid */}
				<NewsStoryGrid />
			</div>
		</main>
	);
};

export default Sports;
