import React from 'react';
import Style from './AnimePanel.module.css';

export function AnimePanel({ anime }) {
	if (!anime)
		return (
			<div className={Style.loader_container}>
				<div className={Style.loader}></div>
			</div>
		);

	return (
		<div className={Style.panel}>
			<h1>{anime.titles[0].title}</h1>
			<img
				src={anime.images.jpg.large_image_url}
				alt='Arte del anime'
			/>
			<h4>{anime.rating}</h4>
			<p>{anime.synopsis}</p>
		</div>
	);
}
