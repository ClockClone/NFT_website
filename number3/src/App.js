import React from "react";
import Navigation from "./components/navigation/navigation.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import "./App.scss";
import Footer from "./components/Footer/Footer.jsx";
import Article from "./components/article/Article.jsx";

function App() {
	return (
		<div>
			<Navigation />
			<HeroSection />
			<Article />
			<Footer />
		</div>
	);
}

export default App;
