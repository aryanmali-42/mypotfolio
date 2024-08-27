import React from "react";
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
	return (
		<>
			<hr />
			<footer class="py-12">
				<div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
					<div class=" flex flex-col items-center justify-center">
						<div class="flex space-x-4">
							<FaFacebook size={24} />
							<FaTwitter size={24} />
							<FaInstagram size={24} />
							<FaLinkedinIn size={24} />
						</div>
						<div class="mt-8 border-t border-gray-950 pt-8 flex flex-col items-center">
							<p class="text-sm">
								&copy;2024 Your Company. All rights reserved.
							</p>
							<p class="text-sm">Supportive Partner ❤️ Aryan</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
