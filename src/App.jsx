import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Potfolio from "./components/Potfolio";
import Experience from "./components/Experience";

import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Home from "./components/home";

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
