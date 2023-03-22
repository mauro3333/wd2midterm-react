import "./App.css";
import MovieCard from './components/MovieCard/MovieCard';
import TvCard from './components/TvCard/TvCard';
import Header from './components/Header/Header';
import { useState } from "react";

window.genres = [];

function App() {

	const [searchTv, setSearchTv] = useState("");
	const [searchMovie, setSearchMovie] = useState("");

	// setMediaGenres(window.genres);
	
	return (
		<div>
			<Header />
			<h1>MOVIES</h1>
			<MovieCard />
			<h1>TV SHOWS</h1>
			<TvCard />
		</div>
	);

	

};


export default App;


