import { useEffect, useState } from 'react';
import { getAnime, SearchAnime } from './Apis/JikanApi';
import './App.css';
import { AnimePanel } from './components/AnimePanel';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Content } from './components/Content';
import { Input } from './components/Input';
import Styles from './Content.module.css';
import { Principal } from './content/ContentText';

const rating = {
	sfw: ['G - All Ages', 'PG - Children', 'PG-13 - Teens 13 or older'],
	nsfw: ['R - 17+ (violence & profanity)', 'R+ - Mild Nudity', 'Rx - Hentai'],
};
const filters = {
	nsfw: false,
};

function App() {
	const [anime, setAnime] = useState(null);
	const [animeList, setAnimeList] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		handleAnime();
	}, []);

	async function handleAnime() {
		if (loading) return;

		setLoading(true);

		filters.nsfw = document.querySelector('#NSFW').checked;
		setAnime(null);

		let anime = await getAnime();

		if (filters.nsfw) {
			while (!rating.nsfw.includes(anime.data.rating)) {
				anime = await getAnime();
			}
		} else {
			while (rating.nsfw.includes(anime.data.rating)) {
				console.log(anime.data.rating);
				anime = await getAnime();
				console.log(anime.data.rating);
			}
		}

		setAnime(anime.data);
		setLoading(false);
	}

	async function handleSearch() {
		filters.nsfw = document.querySelector('#NSFW').checked;
		setAnime(null);

		let anime = await SearchAnime(document.getElementById('SearchAnime').value);
		anime = anime.data[0];

		console.log(anime);
		setAnime(anime);
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>AniEnhance</h1>
			</header>
			<div className={Styles.App_body}>
				<Content
					title={Principal.title}
					content={Principal.content}
				/>
				<div className={Styles.input_container}>
					<Button
						content={'Random'}
						event={handleAnime}
						id={'randomAnime'}
					/>
					<Button
						content={'Buscar'}
						event={handleSearch}
						id={'buttonSearch'}
					/>

					<Input />
				</div>
				<div className={Styles.filter_container}>
					<p className={Styles.filter_title}>Filtros:</p>
					<Checkbox
						id={'NSFW'}
						label={'NSFW'}
						name={'NSFW'}
					/>
				</div>

				<AnimePanel anime={anime} />
				<Content
					content={''}
					title={''}
				/>
			</div>

			<footer className='App-footer'>
				<h3>kksd</h3>
			</footer>
		</div>
	);
}

export default App;
