import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/About";
import Potfolio from "./components/Potfolio";
import Experience from "./components/Experience";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

const App = () => {
	return (
		<>
			<div>
				<Navbar />
				<Home />
				<About />
				<Potfolio />
				<Experience />
				<Contact />
				<Footer />
			</div>
			<Toaster />
		</>
	);
};

export default App;
