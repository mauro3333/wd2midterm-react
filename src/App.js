import logo from "./logo.svg";
import "./App.css";
import MovieCard from './components/MovieCard/MovieCard';
import TvCard from './components/TvCard/TvCard';

// const urlTvData = "https://api.themoviedb.org/3/trending/tv/week?api_key=62b02abd5a65773a68f6537cbbd0b18a";
// const urlGenreTvData = "https://api.themoviedb.org/3/genre/tv/list?api_key=62b02abd5a65773a68f6537cbbd0b18a&language=en-US";
// const urlMovieData = "https://api.themoviedb.org/3/trending/movie/week?api_key=62b02abd5a65773a68f6537cbbd0b18a";
// const urlGenreMovieData =  "https://api.themoviedb.org/3/genre/movie/list?api_key=62b02abd5a65773a68f6537cbbd0b18a&language=en-US";



// let finalMovieArray = [];
// let finalTvArray = [];
// let genreTvNameGlobal = {};
// let genreMovieNameGlobal = {};
// let genres = [];


function App() {



	
	return (
		<div>

			<h1>MOVIES</h1>
			<MovieCard />
			<h1>TV SHOWS</h1>
			<TvCard />


		</div>
	);


	};

export default App;


