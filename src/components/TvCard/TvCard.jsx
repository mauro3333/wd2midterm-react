import "./TvCard.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Card } from "../Card/Card";

const urlTvData = "https://api.themoviedb.org/3/trending/tv/week?api_key=62b02abd5a65773a68f6537cbbd0b18a";
const urlGenreTvData = "https://api.themoviedb.org/3/genre/tv/list?api_key=62b02abd5a65773a68f6537cbbd0b18a&language=en-US";

export default function TvCard() {
	const [tvData, setTvData] = useState([]);
	const [genreTvData, setGenreTvData] = useState([]);

	useEffect(() => {
        getTvData();
        getGenreTvData();
	}, []);

	const getTvData = async () => {
		const {	data: { results } } = await axios.get(urlTvData);
        setTvData(results);
	};

	const getGenreTvData = async () => {
		const {	data: { genres } } = await axios.get(urlGenreTvData);
		setGenreTvData(genres);
	};

    tvData.forEach((element) => {
        element.genre_ids.forEach((genreId, index) => {
            genreTvData.find(genre => {
                if(genre.id === genreId){
                    element.genre_ids[index] = genre.name;
					window.genres.push(genre.name);
                }
            });
        });
    });

	return (
		<div className="tvcard-container">
			{tvData.map((tv) => {
				return <Card { ...tv }/>;
			})}
		</div>
	);
}
