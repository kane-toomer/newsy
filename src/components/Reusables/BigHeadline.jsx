import React from "react";

// Temporary Import
import newsIMG from "../../assets/Images/newsIMG.jpg";

const BigHeadline = () => {
	return (
		<div className="px-4 py-6 sm:px-0">
			<a href="#" className="grid grid-cols-3 gap-4">
				<div className="col-span-3 md:col-span-1">
					<div className="text-gray-800">
						{/* Headline */}
						<p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 hover:underline">
							eu tincidunt tortor aliquam nulla facilisi cras fermentum odio
						</p>
						{/* Story Preview */}
						<p className="text-base mb-5">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
							risus commodo viverra maecenas...
						</p>
						{/* Author & Date */}
						<div className="flex justify-between items-center text-gray-500 font-bold text-xs mb-5">
							<p>by Kane Toomer</p>
							<p className="mr-5">1.24.24</p>
						</div>
					</div>
				</div>
				<div className="col-span-3 md:col-span-2 order-first md:order-last">
					<div className="flex justify-center lg:justify-end">
						<img src={newsIMG} className="rounded-md hover:opacity-75" />
					</div>
				</div>
			</a>
		</div>
	);
};

export default BigHeadline;
