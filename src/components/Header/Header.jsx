import "./Header.css";
import React from "react";
import { useState } from "react";

export default function Header() {

	const [searchTv, setSearchTv] = useState("");
	const [searchMovie, setSearchMovie] = useState("");


	return (
		<header>
			<h1 id="title">MOVIES AND TV SHOWS APP</h1>
			<div className="search-container">
				<h2>Search By:</h2>
				<div>
					<div>
						<button
							type="button"
							className="search-button"
							onClick="searchTv()"
						>
							Search TV Shows
						</button>
						<input
							type="text"
							value={searchTv}
							id="searchTv-input"
							className="search-input"
							onChange={(e) => setSearchTv(e.target.value)}
						/>
					</div>

					<div>
						<button
							type="button"
							className="search-button"
							onClick="searchMovie()"
						>
							Search Movies
						</button>
						<input
							type="text"
							value={searchMovie}
							id="searchMovie-input"
							className="search-input"
							onChange={(e) => setSearchMovie(e.target.value)}
						/>
					</div>
				</div>
			</div>

			<div id="filter-div" className="filter-div">
				<h2>Filter By:</h2>
				<div id="filter-container" className="filter-container">
					{window.genres.map((genres) => {
						return(

							<button type="button" className="filter-button" onClick="filterElement()">
								{genres}
							</button>
						) 
					})}
				</div>
			</div>
		</header>
	);
};
