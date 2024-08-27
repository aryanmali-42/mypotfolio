import React from "react";
import { ImOpt } from "react-icons/im";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import nodejs from "../../public/node.png";
import react from "../../public/reactjs.png";
const Potfolio = () => {
	const cardItem = [
		{
			id: 1,
			logo: mongoDB,
			name: "MongoDB",
		},
		{
			id: 2,
			logo: java,
			name: "Java",
		},
		{
			id: 3,
			logo: python,
			name: "Python",
		},
		{
			id: 4,
			logo: express,
			name: "Express",
		},
		{
			id: 5,
			logo: nodejs,
			name: "NodeJs",
		},
		{
			id: 6,
			logo: react,
			name: "React",
		},
	];
	return (
		<div
			name="Potfolio"
			class="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 "
		>
			<div>
				<h1 class="text-3xl font-bold mb-5">PortFolio</h1>
				<span class="underline font-semibold">Featured Projects</span>
				<div class="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
					{cardItem.map(({ id, logo, name }) => (
						<div
							key="id"
							class="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-150"
						>
							<img
								src={logo}
								alt=""
								class="w-[120px] h-[120px] p-1 rounded-full border-[2px] ml-20"
							/>
							<div>
								<div class="font-bold text-xl mb-2 px-2 ml-24">{name}</div>
								<p class="px-2 text-gray-700">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit
								</p>
							</div>
							<div class="     mt-7 ml-14">
								<button class="bg-green-500 hover:bg-green-700 text-white font-bold px-9 py-2 rounded text-center">
									Source Code
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Potfolio;
