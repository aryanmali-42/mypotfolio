import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const Home = () => {
	return (
		<>
			<div class="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
				<div class="flex f;ex-col md:flex-row">
					<div class="md:w-1/2 mt-12 md:mt-24 space-y-2">
						<span class="text-xl">Welcome To My Page</span>
						<div class="flex space-x-1 text-2xl md:text-4xl">
							<h1>Hello, I'm a</h1>
							<span class="text-red-700 font-bold">Developer</span>
						</div>
						<br />
						<p class="text-sm md:text-md text-justify">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iure
							aut eaque odit error? Ex repudiandae officiis provident nam
							aspernatur tenetur, animi tempore esse omnis perspiciatis illo
							temporibus quibusdam saepe.
						</p>
						<br />
						{/* Social Media Icons */}
						<div className="space-y-2">
							<h1 class="font-bold">Available On</h1>
							<ul class="flex space-x-5">
								<li>
									{" "}
									<FaSquareFacebook class="text-2xl cursor-pointer" />
								</li>

								<li>
									{""}

									<IoLogoYoutube class="text-2xl cursor-pointer" />
								</li>
								<li>
									{""}
									<FaLinkedin class="text-2xl cursor-pointer" />
								</li>
								<li>
									{""}
									<BsTelegram class="text-2xl cursor-pointer" />
								</li>
							</ul>
						</div>
						<div>
							<h1 class="font-bold">Currently Working</h1>
							<div class="flex space-x-5">
								<li>
									{" "}
									<FaSquareFacebook class="text-2xl cursor-pointer" />
								</li>

								<li>
									{""}

									<IoLogoYoutube class="text-2xl cursor-pointer" />
								</li>
								<li>
									{""}
									<FaLinkedin class="text-2xl cursor-pointer" />
								</li>
								<li>
									{""}
									<BsTelegram class="text-2xl cursor-pointer" />
								</li>
							</div>
						</div>
					</div>

					<div class="md:w-1/2">Right</div>
				</div>
			</div>
		</>
	);
};

export default Home;
