import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const AuthSelection = () => {
	return (
		<>
			<div className="relative min-h-screen grid bg-white ">
				<div className="flex flex-col sm:flex-row items-center sm:justify-center flex-auto min-w-0 ">
					<div className="relative sm:w-1/2 xl:w-3/5 bg-blue-700 h-full hidden lg:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative">
						<div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
							<div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center ">
								<p className="mt-6 font-bold text-7xl text-white">Newsy</p>
							</div>
						</div>
					</div>
					<div className=" w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
						<div className="max-w-xl w-full space-y-12">
							<div className="lg:text-left text-center">
								<Link to={"/"}>
									<div className="flex items-center text-blue-600">
										<FontAwesomeIcon icon={faChevronLeft} />
										<p className="font-medium ml-2 hover:underline">Back</p>
									</div>
								</Link>
								<p className="mt-6 font-bold text-2xl text-gray-900">Newsy</p>
								<h2 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
									World news at your fingertips
								</h2>
								<p className="mt-10 text-3xl text-gray-600">
									Join Newsy today.
								</p>
							</div>
							<div className="flex flex-row justify-center items-center space-x-3"></div>

							<div>
								<Link
									to={"/register"}
									type="submit"
									className="lg:w-3/5 w-full flex justify-center text-gray-100 p-4 rounded-md tracking-wide font-bold focus:outline-none focus:shadow-outline hover:border hover:border-blue-700 hover:bg-transparent hover:text-blue-700 shadow-lg bg-blue-700 cursor-pointer transition ease-in duration-300">
									Register
								</Link>
							</div>
							<div>
								<Link
									to={"/signin"}
									type="submit"
									className="lg:w-3/5 w-full flex justify-center border-blue-700 bg-transparent text-blue-700 p-4 border rounded-md tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:text-white shadow-lg cursor-pointer transition ease-in duration-300">
									Sign In
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AuthSelection;
