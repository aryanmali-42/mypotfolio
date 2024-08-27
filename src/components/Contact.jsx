import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		const userInfo = {
			name: data.name,
			email: data.email,
			message: data.message,
		};
		try {
			await axios.post("https://getform.io/f/akkgxoka", userInfo);
			toast.success("Your Message Has Been Sent");
		} catch (error) {
			toast.error(error);
		}
	};

	return (
		<div
			name="Contact"
			class="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
		>
			<h1 class="text-3xl font-bold mb-4">Contact Me</h1>
			<span>Please fill out the form below to contact me</span>
			<div class="flex flex-col items-center justify-center mt-5">
				<form
					onSubmit={handleSubmit(onSubmit)}
					// action="https://getform.io/f/akkgxoka"
					// method="POST"
					class="bg-slate-200 w-96 px-8 py-6 rounded-xl"
				>
					<h1 class="text-xl font-semibold mb-4">Send Your Message</h1>
					<div class="flex flex-col mb-4">
						<label class="block text-gray-950 ">Full Name</label>
						<input
							{...register("name", { required: true })}
							class="shado w border rounded-lg py-2 px-3 text-gray-700 apperance-none"
							id="name"
							name="name"
							type="text "
							placeholder="Enter Your Full Name"
						/>{" "}
						{errors.name && <span>This field is required</span>}
					</div>
					<div class="flex flex-col mb-4">
						<label class="block text-gray-950 ">Email Address</label>
						<input
							{...register("email", { required: true })}
							class="shado w border rounded-lg py-2 px-3 text-gray-700 apperance-none"
							id="name"
							type="email"
							name="email"
							placeholder="Enter Your Email Address"
						/>
						{errors.email && <span>This field is required</span>}
					</div>
					<div class="flex flex-col mb-4">
						<label class="block text-gray-950 ">Message</label>
						<textarea
							{...register("message", { required: true })}
							class="shado w border rounded-lg py-2 px-3 text-gray-700 apperance-none"
							id="name"
							name="message"
							type="message "
							placeholder="Enter Your Query "
						></textarea>
						{errors.message && <span>This field is required</span>}
					</div>
					<button
						type="submit"
						className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
