import React from "react";
import BigHeadline from "../Reusables/BigHeadline";
import NewsStoryGrid from "../Reusables/NewsStoryGrid";

const HomePage = () => {
	return (
		<main>
			<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				{/* Page Title */}
				<p className="font-bold text-4xl mt-5 mb-10 ml-3 sm:ml-0">
					Latest Headlines
				</p>

				{/* Big Headline - 1 */}
				<BigHeadline />

				{/* News Story Grid - 1 */}
				<NewsStoryGrid />

				{/* Sub Headlines */}
				<div className="h-64 rounded-lg border-4 border-dashed border-gray-200" />
			</div>
		</main>
	);
};

export default HomePage;
