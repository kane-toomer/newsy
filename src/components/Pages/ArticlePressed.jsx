import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// Temporary Import
import newsIMG from "../../assets/Images/newsIMG.jpg";

const ArticlePressed = () => {
	return (
		<main>
			<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				{/* Back Button */}
				<div className="mb-10 ml-5 sm:ml-0">
					<button className="flex items-center text-blue-600">
						<FontAwesomeIcon icon={faChevronLeft} />
						<p className="font-medium ml-2 hover:underline">Back</p>
					</button>
				</div>

				{/* Article Title */}
				<div className="grid grid-cols-3 mx-5 sm:mx-0">
					<p className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 col-span-3 md:col-span-2">
						eu tincidunt tortor aliquam nulla facilisi cras fermentum odio
					</p>
				</div>

				{/* Article Author & Date */}
				<div className="font-medium text-base mb-5 mx-5 sm:mx-0">
					<p className="text-gray-500">by Kane Toomer</p>
					<p className="text-gray-400 mt-3">Published: 1.24.24</p>
				</div>

				{/* Article Image */}
				<div className="col-span-3 md:col-span-2 order-first md:order-last">
					<div className="flex justify-center lg:justify-end mx-5 sm:mx-0">
						<img src={newsIMG} className="rounded-md" />
					</div>
				</div>

				{/* Article Content */}
				<div className="my-10 px-5 sm:px-10 md:px-20 lg:px-24">
					<p className="text-lg leading-10">
						Human Rights Advocates Celebrate as Landmark Legislation Passes In a
						historic move, lawmakers in [country] have passed legislation aimed
						at strengthening the protection of human rights within the nation.
						The bill, which was met with widespread support from both political
						parties, as well as human rights organizations, will have a
						significant impact on the lives of citizens by increasing access to
						justice and providing greater protections for marginalized groups.
						The legislation includes provisions for the establishment of a
						independent national human rights commission, which will be
						responsible for investigating and addressing human rights
						violations. Additionally, the bill includes measures to protect the
						rights of indigenous peoples, refugees, and other marginalized
						groups, and will also strengthen protections for freedom of speech,
						religion, and assembly. The bill's passage was hailed as a major
						victory for human rights advocates, who have been working for years
						to bring about such legislation. Speaking at a press conference, the
						leader of a local human rights group said, "This is a truly historic
						moment for our country. The passage of this bill represents a major
						step forward in our nation's commitment to protecting the rights of
						all citizens, regardless of their background or circumstances." The
						government has also announced plans to establish a special task
						force to ensure the implementation of the bill and the protection of
						human rights in the country. This bill is considered as a important
						step towards ensuring the protection of human rights and promoting a
						culture of respect for human dignity in the country. It is a
						reminder that human rights are universal and inalienable, and that
						the government has a responsibility to protect and promote them for
						all citizens. The bill's passage is expected to have a positive
						impact on the country's international reputation and will likely be
						welcomed by the international community as a sign of the nation's
						commitment to human rights and democracy.
					</p>
				</div>
			</div>
		</main>
	);
};

export default ArticlePressed;
