import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Profile = () => {
	return (
		<>
			{/* Header */}
			<Disclosure as="nav" className="bg-gray-800">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-end">
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							{/* Profile dropdown */}
							<Menu as="div" className="relative ml-3">
								<div>
									<Menu.Button className="flex rounded-full bg-gray-800 text-xl text-white focus:outline-none">
										<span className="sr-only">Open user menu</span>
										<FontAwesomeIcon icon={faUser} />
									</Menu.Button>
								</div>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95">
									<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active ? "bg-gray-100" : "",
														"block px-4 py-2 text-sm text-gray-700"
													)}>
													Settings
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active ? "bg-gray-100" : "",
														"block px-4 py-2 text-sm text-gray-700"
													)}>
													Sign out
												</a>
											)}
										</Menu.Item>
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
					</div>
				</div>
			</Disclosure>

			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl py-5 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">
						Profile
					</h1>
				</div>
			</header>

			{/* Body */}
			<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
		</>
	);
};

export default Profile;
