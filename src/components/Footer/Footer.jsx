import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	return (
		<>
			<footer className="min-h-full bg-blue-900 text-white py-5">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
						<div className="flex-shrink-0">
							<h3 className="text-white text-3xl font-bold mb-3">Newsy</h3>
							<p className="text-gray-400">Created by Kane Toomer</p>
						</div>
						{/* Company Column */}
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase ">Company</h2>
							<ul className="text-gray-500 dark:text-gray-400">
								<li className="mb-4">
									<a href="#" className=" hover:underline">
										About
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Careers
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Brand Center
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Blog
									</a>
								</li>
							</ul>
						</div>

						{/* Help Center Column */}
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase">
								Help center
							</h2>
							<ul className="text-gray-500 dark:text-gray-400">
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Discord Server
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Twitter
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Facebook
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Contact Us
									</a>
								</li>
							</ul>
						</div>

						{/* Legal Column */}
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
							<ul className="text-gray-500 dark:text-gray-400">
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Privacy Policy
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Licensing
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Terms &amp; Conditions
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Copyright & Social Icons */}
					<div className="px-4 py-6 md:flex md:items-center md:justify-between rounded-md">
						<span className="text-sm sm:text-center">
							© 2023 <a href="https://kanetoomer.com/">Newsy™</a>. All Rights
							Reserved.
						</span>
						<div className="flex mt-4 space-x-6 sm:justify-center md:mt-0 align-center">
							<a
								href="https://www.linkedin.com/in/kanetoomer/"
								className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
								<FontAwesomeIcon
									icon={faLinkedin}
									className="text-white text-xl"
								/>
								<span className="sr-only">LinkedIn</span>
							</a>
							<a
								href="https://github.com/kane-toomer"
								className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
								<FontAwesomeIcon
									icon={faGithub}
									className="text-white text-xl"
								/>
								<span className="sr-only">GitHub account</span>
							</a>
							<a
								href="mailto:kanetoomer@yahoo.com"
								className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
								<FontAwesomeIcon
									icon={faEnvelope}
									className="text-white text-xl"
								/>
								<span className="sr-only">Contact via Email</span>
							</a>
							<a
								href="https://kanetoomer.com/"
								className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
								<FontAwesomeIcon
									icon={faGlobe}
									className="text-white text-xl"
								/>
								<span className="sr-only">Portfolio</span>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
