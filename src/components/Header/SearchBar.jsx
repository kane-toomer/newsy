import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
	return (
		<header className="bg-white shadow">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center">
					<MagnifyingGlassIcon
						className="h-5 w-5 mr-4 text-gray-600"
						aria-hidden="true"
					/>
					<input
						type="text"
						name="company-website"
						id="company-website"
						className="block w-full h-16 flex-1 rounded-none rounded-r-md border-gray-300 sm:text-sm focus:outline-none"
						placeholder="Search Newsy"
					/>
				</div>
			</div>
		</header>
	);
};

export default SearchBar;
