import React from 'react';
import Style from './AnimePanel.module.css';
import LoadingStyle from './Loading.module.css';

export function AnimePanel({ anime }) {
	if (!anime)
		return (
			<div
				className={LoadingStyle.loader_container}
				style={{ backgroundColor: '#c6db6e', borderColor: '#c6db6e', height: '800px' }}
			>
				<div className={LoadingStyle.loader}></div>
			</div>
		);

	if (!anime.titles.length || !anime.titles)
		return (
			<div className={Style.panel}>
				<h1>{anime.title}</h1>
				<img
					src={anime.images.jpg.large_image_url}
					alt='Arte del anime'
				/>
				<h3 className={Style.information_title}>Information</h3>
				<div className={Style.information}>
					<Info
						type={'Type: '}
						info={anime.type}
					/>
					<Info
						type={'Duration: '}
						info={anime.duration}
					/>
					{anime.type !== 'Movie' && (
						<Info
							type={'Episodes: '}
							info={anime.episodes}
						/>
					)}
					<Info
						type={'Status: '}
						info={anime.status}
					/>
					<Info
						type={'Season: '}
						info={anime.season}
					/>
					<Info
						type={'Aired: '}
						info={anime.aired.string}
					/>
					<Info
						type={'Studios: '}
						info={anime.studios.map((studio) => `${studio.name}`).join(', ')}
					/>
					<Info
						type={'Generes: '}
						info={anime.genres.map((genere) => `${genere.name}`).join(', ')}
					/>
					<Info
						type={'Themes: '}
						info={anime.themes.map((theme) => `${theme.name}`).join(', ')}
					/>
					<Info
						type={'Rating: '}
						info={anime.rating}
					/>
				</div>

				<h4>Synopsis</h4>

				<div className={Style.synopsis_panel}>
					<p>{anime.synopsis ? anime.synopsis : 'Has no description.'}</p>
				</div>
			</div>
		);

	return (
		<div className={Style.panel}>
			<h1>{anime.titles[0].title}</h1>
			<img
				src={anime.images.jpg.large_image_url}
				alt='Arte del anime'
			/>

			<h3 className={Style.information_title}>Information</h3>
			<div className={Style.information}>
				<Info
					type={'Type: '}
					info={anime.type}
				/>
				<Info
					type={'Duration: '}
					info={anime.duration}
				/>
				{anime.type !== 'Movie' && (
					<Info
						type={'Episodes: '}
						info={anime.episodes}
					/>
				)}
				<Info
					type={'Status: '}
					info={anime.status}
				/>
				<Info
					type={'Season: '}
					info={anime.season}
				/>
				<Info
					type={'Aired: '}
					info={anime.aired.string}
				/>
				<Info
					type={'Studios: '}
					info={anime.studios.map((studio) => `${studio.name}`).join(', ')}
				/>
				<Info
					type={'Generes: '}
					info={anime.genres.map((genere) => `${genere.name}`).join(', ')}
				/>
				<Info
					type={'Themes: '}
					info={anime.themes.map((theme) => `${theme.name}`).join(', ')}
				/>
				<Info
					type={'Rating: '}
					info={anime.rating}
				/>
			</div>

			<h4>Synopsis</h4>

			<div className={Style.synopsis_panel}>
				<p>{anime.synopsis ? anime.synopsis : 'Has no description.'}</p>
			</div>
		</div>
	);
}

function Info({ type, info }) {
	return (
		<>
			<p className={Style.info}>
				<text style={{ fontFamily: 'KanitBold' }}>{type}</text>
				{info ? info : 'Unknown'}
			</p>
		</>
	);
}
