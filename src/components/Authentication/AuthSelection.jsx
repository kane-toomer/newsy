import React from "react";
import background from "../../assets/Images/authBG.jpg";

const AuthSelection = () => {
	return (
		<>
			<div className="relative min-h-screen grid bg-black ">
				<div className="flex flex-col sm:flex-row items-center sm:justify-center flex-auto min-w-0 ">
					<div
						className="relative sm:w-1/2 xl:w-3/5 bg-black h-full hidden lg:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative"
						style={{ backgroundImage: `url(${background})` }}>
						<div className="absolute bg-black  opacity-25 inset-0 z-0"></div>
						<div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
							<div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center ">
								<p className="mt-6 font-bold text-7xl text-white">Newsy</p>
							</div>
						</div>
					</div>
					<div className=" w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
						<div className="max-w-xl w-full space-y-12">
							<div className="lg:text-left text-center">
								<p className="mt-6 font-bold text-2xl text-white">Newsy</p>
								<h2 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-100">
									World news at your fingertips
								</h2>
								<p className="mt-10 text-3xl text-gray-200">
									Join Newsy today.
								</p>
							</div>
							<div className="flex flex-row justify-center items-center space-x-3"></div>

							<div>
								<button
									type="submit"
									className="lg:w-3/5 w-full flex justify-center text-gray-100 p-4 rounded-md tracking-wide font-bold focus:outline-none focus:shadow-outline hover:bg-blue-900 shadow-lg bg-blue-700 cursor-pointer transition ease-in duration-300">
									Register
								</button>
							</div>
							<div>
								<button
									type="submit"
									className="lg:w-3/5 w-full flex justify-center border-white bg-transparent text-gray-100 p-4 border rounded-md tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-900 shadow-lg cursor-pointer transition ease-in duration-300">
									Sign In
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AuthSelection;
