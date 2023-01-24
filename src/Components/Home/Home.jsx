import React from "react";
import newsIMG from "../../assets/Images/newsIMG.jpg";

const HomePage = () => {
	return (
		<main>
			<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				<p className="font-bold text-4xl mt-5 mb-10 ml-3 sm:ml-0">
					Latest Headlines
				</p>
				{/* Content */}
				<div className="px-4 py-6 sm:px-0">
					<div className="grid grid-cols-3 gap-4">
						{/* BIG HEADLINE */}
						<div className="col-span-3 md:col-span-1">
							<div>
								<div className="flex justify-between">
									<p className="text-gray-600 font-bold text-xs mb-5">
										by Kane Toomer
									</p>
									<p className="text-gray-600 font-bold text-xs mb-5 mr-5">
										1.24.24
									</p>
								</div>
								<p className="text-gray-800 font-bold text-4xl lg:text-6xl">
									eu tincidunt tortor aliquam nulla facilisi cras fermentum odio
								</p>
							</div>
						</div>
						<div className="col-span-3 md:col-span-2">
							<div className="flex justify-center lg:justify-end">
								<img src={newsIMG} className="rounded-md" />
							</div>
						</div>
						{/* END BIG HEADLINE */}
					</div>

					<div className="grid grid-cols-3 gap-4 mt-32">
						{/* ROW 3 COL HEADLINES */}
						<div className="col-span-3 sm:col-span-1">
							<img src={newsIMG} className="rounded-md" />
							<div className="flex justify-between my-5">
								<p className="text-gray-600 font-bold text-xs">
									by Kane Toomer
								</p>
								<p className="text-gray-600 font-bold text-xs">1.24.24</p>
							</div>
							<p className="text-gray-800 font-bold text-xl">
								eu tincidunt tortor aliquam nulla facilisi cras fermentum odio
							</p>
						</div>
					</div>
				</div>
				{/* /End Big Headline */}

				{/* Sub Headlines */}
				<div className="h-64 rounded-lg border-4 border-dashed border-gray-200" />
				{/* /End Sub Headlines */}
			</div>
		</main>
	);
};

export default HomePage;
