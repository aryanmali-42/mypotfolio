import React from "react";
import { ImOpt } from "react-icons/im";
import html from "../../public1/html.png";
import css from "../../public1/css.jpg";
import java from "../../public1/java.png";
import javascript from "../../public1/javascript.png";
import oracle from "../../public1/oracle.png";
const Experience = () => {
	const cardItem = [
		{
			id: 1,
			logo: html,
			name: "Html",
		},
		{
			id: 2,
			logo: java,
			name: "Java",
		},
		{
			id: 3,
			logo: javascript,
			name: "Javascript",
		},
		{
			id: 4,
			logo: css,
			name: "Css",
		},
		{
			id: 5,
			logo: oracle,
			name: "Oracle",
		},
	];
	return (
		<div
			name="Experience"
			class="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 "
		>
			<div>
				<h1 class="text-3xl font-bold mb-5">Experience</h1>
				<p class=" font-semibold">I've experience in below technologies</p>
				<div class="grid grid-cols-2 md:grid-cols-5 gap-3 my-5">
					{cardItem.map(({ id, logo, name }) => (
						<div
							key="id"
							class="flex flex-col items-center md:w-[200px] md:h-[200px] justify-center rounded-full border-[2px] p-1 cursor-pointer hover:scale-105 duration-150"
						>
							<img src={logo} alt="" class="w-[150px] rounded-full " />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
