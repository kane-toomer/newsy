import React from "react";

const articles = [
	{
		id: 1,
		title: "donec enim diam vulputate ut pharetra sit amet aliquam id",
		href: "#",
		author: "Kane Toomer",
		date: "1.24.24",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
		imageAlt:
			"Tall slender porcelain bottle with natural clay textured body and cork stopper.",
	},
	{
		id: 2,
		title: "donec enim diam vulputate ut pharetra sit amet aliquam id",
		href: "#",
		author: "Kane Toomer",
		date: "1.24.24",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
		imageAlt:
			"Tall slender porcelain bottle with natural clay textured body and cork stopper.",
	},
	{
		id: 3,
		title: "donec enim diam vulputate ut pharetra sit amet aliquam id",
		href: "#",
		author: "Kane Toomer",
		date: "1.24.24",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
		imageAlt:
			"Tall slender porcelain bottle with natural clay textured body and cork stopper.",
	},
	{
		id: 4,
		title: "donec enim diam vulputate ut pharetra sit amet aliquam id",
		href: "#",
		author: "Kane Toomer",
		date: "1.24.24",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
		imageAlt:
			"Tall slender porcelain bottle with natural clay textured body and cork stopper.",
	},
	{
		id: 5,
		title: "donec enim diam vulputate ut pharetra sit amet aliquam id",
		href: "#",
		author: "Kane Toomer",
		date: "1.24.24",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
		imageAlt:
			"Tall slender porcelain bottle with natural clay textured body and cork stopper.",
	},
	{
		id: 6,
		title: "donec enim diam vulputate ut pharetra sit amet aliquam id",
		href: "#",
		author: "Kane Toomer",
		date: "1.24.24",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
		imageAlt:
			"Tall slender porcelain bottle with natural clay textured body and cork stopper.",
	},
];

const SubHeadlines = () => {
	return (
		<>
			<div className="px-4 md:py-10 md:mt-10 lg:mt-0 xl:mt-0 sm:px-0">
				<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6 py-5 border-t-2">
					{articles.map((article) => (
						<a href="#" key={article.id} className="flex py-6 hover:opacity-75">
							<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
								<img
									src={article.imageSrc}
									alt={article.imageAlt}
									className="h-full w-full object-cover object-center"
								/>
							</div>

							<div className="ml-4 flex flex-1 flex-col">
								<div>
									<div className="flex justify-between text-base font-medium text-gray-900">
										<h3>
											<a href={article.href}>{article.title}</a>
										</h3>
										<p className="ml-4">{article.price}</p>
									</div>
									<p className="mt-1 text-sm text-gray-500">{article.color}</p>
								</div>
								<div className="flex justify-between items-center mt-5 text-gray-500 font-medium text-xs">
									<p>by {article.author}</p>
									<p>{article.date}</p>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</>
	);
};

export default SubHeadlines;
