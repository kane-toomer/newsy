import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<>
			<div className="relative min-h-screen grid bg-white ">
				<div className="flex flex-col sm:flex-row items-center sm:justify-center flex-auto min-w-0 ">
					<div className="relative sm:w-1/2 xl:w-3/5 bg-blue-700 h-full hidden lg:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative">
						<div className="w-full lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
							<div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center ">
								<p className="mt-6 font-bold text-7xl text-white">Newsy</p>
							</div>
						</div>
					</div>
					<div className=" w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
						<div className="max-w-xl w-full space-y-12">
							<div className="lg:text-left text-center">
								<Link to={"/auth"}>
									<div className="flex items-center text-blue-600">
										<FontAwesomeIcon icon={faChevronLeft} />
										<p className="font-medium ml-2 hover:underline">Back</p>
									</div>
								</Link>
								<p className="mt-6 font-bold text-2xl text-gray-900">Newsy</p>

								<h2 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
									Welcome to Newsy!
								</h2>
								<p className="mt-10 text-2xl text-gray-600">
									Register to get started.
								</p>
							</div>

							<form className="mt-8 space-y-10" action="#" method="POST">
								<input type="hidden" name="remember" defaultValue="true" />
								<div className="-space-y-px rounded-md shadow-sm">
									<div>
										<label htmlFor="email-address" className="sr-only">
											Email address
										</label>
										<input
											id="email-address"
											name="email"
											type="email"
											autoComplete="email"
											required
											className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none sm:text-sm"
											placeholder="Email address"
										/>
									</div>
									<div>
										<label htmlFor="password" className="sr-only">
											Password
										</label>
										<input
											id="password"
											name="password"
											type="password"
											autoComplete="current-password"
											required
											className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none sm:text-sm"
											placeholder="Password"
										/>
									</div>
								</div>

								<div>
									<button
										type="submit"
										className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-white hover:bg-blue-900 focus:outline-none">
										<span className="absolute inset-y-0 left-0 flex items-center pl-3">
											<LockClosedIcon
												className="h-5 w-5 text-blue-400"
												aria-hidden="true"
											/>
										</span>
										Register
									</button>
								</div>
								<div className="text-center">
									<Link to="/signin">
										<p className="text-gray-900">
											Already have an account?{" "}
											<span className="text-blue-700 font-bold hover:underline">
												Sign In Instead
											</span>
										</p>
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
