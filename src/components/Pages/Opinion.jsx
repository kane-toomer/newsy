import React from "react";
import BigHeadline from "../Reusables/BigHeadline";
import NewsStoryGrid from "../Reusables/NewsStoryGrid";
import Footer from "../Footer/Footer";

const Opinion = () => {
	return (
		<main>
			<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				{/* Page Title */}
				<p className="font-bold text-4xl mt-5 mb-10 ml-3 sm:ml-0">Opinion</p>

				{/* Big Headline */}
				<BigHeadline />

				{/* News Story Grid */}
				<NewsStoryGrid />

				{/* Footer */}
				<Footer />
			</div>
		</main>
	);
};

export default Opinion;
