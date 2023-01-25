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
	{
		id: 7,
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
		id: 8,
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

const NewsStoryGrid = () => {
	return (
		<div className="px-4 py-20 md:mt-10 sm:px-0">
			<h2 className="sr-only">Articles</h2>

			<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
				{articles.map((article) => (
					<a key={article.id} href={article.href} className="group mb-12">
						{/* Article Image */}
						<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
							<img
								src={article.imageSrc}
								alt={article.imageAlt}
								className="h-full w-full object-cover object-center group-hover:opacity-75"
							/>
						</div>
						{/* Article Title */}
						<p className="mt-4 text-md font-medium text-gray-900">
							{article.title}
						</p>
						{/* Article Author & Date */}
						<div className="flex justify-between items-center text-gray-500 font-medium text-xs mt-2">
							<p>by {article.author}</p>
							<p className="mr-5">{article.date}</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default NewsStoryGrid;
