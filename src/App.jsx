import { useEffect, useState } from 'react';

// Apis
import { FetchRandomAnime, FetchAnime } from './Apis/JikanApi';

// Components
import { AnimePanel } from './components/AnimePanel';
import { Content } from './components/Content';
import { BlankSpace, Button, Checkbox, Input } from './components/GeneralComponents';
import { WaifuPics } from './Sections/WaifuPics';

// Utils
import { AnimePanelInfo, Principal, WaifuPicsInfo } from './content/ContentText';

// Styles
import Styles from './Content.module.css';
import './App.css';

// Filters
const filters = {
	nsfw: false,
	normal: ['G - All Ages', 'PG - Children', 'PG-13 - Teens 13 or older'],
	adult: ['R - 17+ (violence & profanity)', 'R+ - Mild Nudity', 'Rx - Hentai'],
};

function App() {
	// States
	const [anime, setAnime] = useState(null);
	const [loading, setLoading] = useState(false);

	// Show the first anime
	useEffect(() => {
		handleAnime();
	}, []);

	// Search a random anime
	async function handleAnime() {
		if (loading) return; // If is loading, return

		setLoading(true); // Set loading

		filters.nsfw = document.querySelector('#NSFW').checked; // Check if you want NSFW content

		setAnime(null); // Set anime to null because we want show loading section

		let anime = await FetchRandomAnime();

		if (filters.nsfw) {
			while (!filters.adult.includes(anime.data.rating)) {
				anime = await FetchRandomAnime();
			}
		} else {
			while (filters.adult.includes(anime.data.rating)) {
				anime = await FetchRandomAnime();
			}
		}

		setAnime(anime.data);
		setLoading(false);
	}

	async function handleSearch() {
		filters.nsfw = document.querySelector('#NSFW').checked;
		setAnime(null);

		let anime = await FetchAnime(document.getElementById('SearchAnime').value);
		anime = anime.data[0];

		setAnime(anime);
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>AniEnhance</h1>
			</header>
			<div className={Styles.App_body}>
				{/* First section*/}
				<Content content={Principal} />

				<BlankSpace blankSpaces={3} />

				<Content content={AnimePanelInfo} />

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
					<p
						className={Styles.filter_title}
						style={{ fontFamily: 'KanitMedium' }}
					>
						Filtros:
					</p>
					<Checkbox
						id={'NSFW'}
						label={'NSFW'}
					/>
				</div>

				<AnimePanel anime={anime} />

				<BlankSpace blankSpaces={2} />

				{/* Second section */}

				<Content content={WaifuPicsInfo} />

				<WaifuPics />
			</div>

			<footer className='App-footer'>
				<h3>kksd</h3>
			</footer>
		</div>
	);
}

export default App;
