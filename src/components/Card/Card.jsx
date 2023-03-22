import "./Card.css";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";



export const Card = (props) => {
	// console.log(props);
    // console.log("eeeeeeeeeee", props.genre_ids);
    // console.log(window.genres);
    let tempoGenreArray = window.genres;
    window.genres = [...new Set(tempoGenreArray)];
    console.log("final-----", window.genres);


    let posterImage = "";
    let backImage = "";
    let mediaName = "";
    let mediaRelease = "";

    if(props.media_type === "tv"){
        mediaName = props.name;
        mediaRelease = props.first_air_date;
    }
    else{
        mediaName = props.title;
        mediaRelease = props.release_date;
    }

    if (props.poster_path != null) {
        posterImage = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + props.poster_path;
    } else {
        posterImage = "https://via.placeholder.com/300x450";
    }

    if (props.backdrop_path != null) {
        backImage = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + props.backdrop_path;
    } else {
        backImage = "https://via.placeholder.com/300x450";
    }


    const [flip, setFlip] = useState(false);
	return (
		<div className="full-card" onClick={() => setFlip(!flip)}>

            <ReactCardFlip className="container-card" isFlipped={flip} flipDirection="horizontal" flipSpeedFrontToBack="0.5" flipSpeedBackToFront="0.5" >
            <div className="front-card">

                <div>
                    <img src={`${posterImage}`} alt="" />
                </div>

                <div className="front-div">
                    <h2>{`${mediaName}`}</h2>

                    <div className="genre-div">
                        <h3>&lt;== Genres ==&gt;</h3>
                        {props.genre_ids.map((element) => {
                                return <p>{element}</p>
                            })
                        }





                    </div>
                </div>
            </div>

            <div className="back-card">
                <div className="back-div">
                    <p>{props.overview}</p>
                    <p>Release Date: {mediaRelease}</p>
                </div>

                <div>
                    <img src={`${backImage}`} alt="" />
                </div>

            </div>
			</ReactCardFlip>
		</div>
	);
};
