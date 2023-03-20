import "./MovieCard.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Card } from "../Card/Card";

const urlMovieData = "https://api.themoviedb.org/3/trending/movie/week?api_key=62b02abd5a65773a68f6537cbbd0b18a";
const urlGenreMovieData = "https://api.themoviedb.org/3/genre/movie/list?api_key=62b02abd5a65773a68f6537cbbd0b18a&language=en-US";

export default function MovieCard() {
	const [movieData, setMovieData] = useState([]);
	const [genreMovieData, setGenreMovieData] = useState([]);

	useEffect(() => {
        getMovieData();
        getGenreMovieData();
	}, []);

	const getMovieData = async () => {
		const {	data: { results } } = await axios.get(urlMovieData);
        setMovieData(results);
	};

	const getGenreMovieData = async () => {
		const {	data: { genres } } = await axios.get(urlGenreMovieData);
		setGenreMovieData(genres);
	};

    movieData.forEach((element) => {
        element.genre_ids.forEach((genreId, index) => {
            genreMovieData.find(genre => {
                if(genre.id === genreId){
                    element.genre_ids[index] = genre.name;
                }
            });
        });
    });

	return (
        <div className="moviecard-container">
            {movieData.map((movie) => {
                return <Card { ...movie }/>;
            })}
        </div>

	);
}
