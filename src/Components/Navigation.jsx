import { Disclosure } from "@headlessui/react";
import {
	ArrowLeftOnRectangleIcon,
	Bars3Icon,
	XMarkIcon,
	MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const navigation = [
	{ name: "Home", href: "#", current: true },
	{ name: "Business", href: "#", current: false },
	{ name: "Entertainment", href: "#", current: false },
	{ name: "Politics", href: "#", current: false },
	{ name: "Sports", href: "#", current: false },
	{ name: "Technology", href: "#", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Navigation = () => {
	return (
		<>
			<div className="min-h-full">
				<Disclosure as="nav" className="bg-blue-700">
					{({ open }) => (
						<>
							<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
								<div className="flex h-16 items-center justify-between">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<h3 className="text-white text-3xl font-bold">Newsy</h3>
										</div>
										<div className="flex items-center">
											<div className="hidden md:block">
												<div className="ml-10 flex items-baseline space-x-4">
													{navigation.map((item) => (
														<a
															key={item.name}
															href={item.href}
															className={classNames(
																item.current
																	? "bg-blue-900 text-white"
																	: "text-gray-300 hover:bg-blue-800 hover:text-white",
																"px-3 py-2 rounded-md text-sm font-medium"
															)}
															aria-current={item.current ? "page" : undefined}>
															{item.name}
														</a>
													))}
												</div>
											</div>
										</div>
									</div>

									<div className="hidden lg:block">
										<div className="ml-4 flex items-center md:ml-6">
											<button
												type="button"
												className="rounded-md p-2 text-white hover:bg-blue-800  focus:outline-none">
												<span className="sr-only">View notifications</span>
												<p className="font-medium">Sign In / Register</p>
											</button>
										</div>
									</div>

									<div className="hidden md:block lg:hidden">
										<div className=" flex items-center ">
											<button
												type="button"
												className="rounded-md p-2 text-white hover:bg-blue-800  focus:outline-none">
												<span className="sr-only">View notifications</span>
												<ArrowLeftOnRectangleIcon className="block h-6 w-6" />
											</button>
										</div>
									</div>

									<div className="-mr-2 flex md:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-800 hover:text-white focus:outline-none">
											<span className="sr-only">Open main menu</span>
											{open ? (
												<XMarkIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											) : (
												<Bars3Icon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Disclosure.Button>
									</div>
								</div>
							</div>

							<Disclosure.Panel className="md:hidden">
								<div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
									{navigation.map((item) => (
										<Disclosure.Button
											key={item.name}
											as="a"
											href={item.href}
											className={classNames(
												item.current
													? "bg-blue-900 text-white"
													: "text-gray-300 hover:bg-blue-800 hover:text-white",
												"block px-3 py-2 rounded-md text-base font-medium"
											)}
											aria-current={item.current ? "page" : undefined}>
											{item.name}
										</Disclosure.Button>
									))}
								</div>
								<div className="border-t border-gray-300 mx-3 pt-4 pb-3">
									<button
										type="button"
										className="rounded-full ml-1 p-1 text-white hover:text-white focus:outline-none">
										<span className="sr-only">Toggle Theme</span>
										<p className="font-medium">Sign In / Register</p>
									</button>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

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
			</div>
		</>
	);
};

export default Navigation;
