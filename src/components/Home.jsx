import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../public1/codeimg.jpg";

const Home = () => {
	return (
		<>
			<div
				name="Home"
				class="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 "
			>
				<div class="flex flex-col md:flex-row">
					<div class="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 ">
						<span class="text-xl">Welcome To My Page</span>
						<div class="flex space-x-1 text-2xl md:text-4xl">
							<h1>Hello, I'm a</h1>
							{/* <span >Developer</span> */}
							<ReactTyped
								className="text-red-700 font-bold"
								strings={["Developer", "Programmer", "Coader"]}
								typeSpeed={70}
								loop={true}
							/>
						</div>
						<br />
						<p class="text-sm md:text-md text-justify">
							Passionate about coding and constantly exploring new technologies.
							Whether it's crafting efficient algorithms or building innovative
							applications, I thrive in the world of programming. I believe in
							the power of code to solve real-world problems and am always eager
							to learn and grow in this ever-evolving field. Join me on this
							journey as I share insights, projects, and tips that can help us
							all become better developers.
						</p>
						<br />
						{/* Social Media Icons */}
						<div class="flex flex-col  items-center md:flex-row  justify-between space-y-6 md:space-x-0 ">
							<div className=" space-y-2 ">
								<h1 class="font-bold text-center">Available On</h1>
								<ul class="flex space-x-5">
									<li>
										<a href="https://www.facebook.com/">
											<FaSquareFacebook class="text-2xl cursor-pointer hover:scale-110 duration-200" />
										</a>
									</li>

									<li>
										<a href="https://www.youtube.com/">
											<IoLogoYoutube class="text-2xl cursor-pointer hover:scale-110 duration-200" />
										</a>
									</li>
									<li>
										<a href="https://www.linkedin.com/">
											<FaLinkedin class="text-2xl cursor-pointer hover:scale-110 duration-200" />
										</a>
									</li>
									<li>
										<a href="https://web.telegram.org/">
											<BsTelegram class="text-2xl cursor-pointer hover:scale-110 duration-200" />
										</a>
									</li>
								</ul>
							</div>
							<div class="space-y-2">
								<h1 class="font-bold">Currently Working</h1>
								<div class="flex space-x-5">
									<SiMongodb class="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full  border-[2px]" />
									<SiExpress class="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full  border-[2px]" />
									<FaReact class="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full  border-[2px]" />
									<FaNodeJs class="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full  border-[2px]" />
								</div>
							</div>
						</div>
					</div>
					<div class="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
						<img
							src={pic}
							class="rounded-full md:w-[450px] md:h-[450px]"
							alt=""
						/>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
};

export default Home;
