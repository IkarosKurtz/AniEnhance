import { useEffect, useState } from 'react';
import { getAnime, SearchAnime } from './Apis/JikanApi';
import './App.css';
import { AnimePanel } from './components/AnimePanel';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Content } from './components/Content';
import { Input } from './components/Input';
import Styles from './Content.module.css';

function App() {
	const [anime, setAnime] = useState(null);

	useEffect(() => {
		handleAnime();
	}, []);

	function handleAnime() {
		let id = Math.floor(Math.random() * 1000);

		getAnime(id)
			.then((anime) => {
				console.log(anime);
				setAnime(anime.data);
			})
			.catch(() => handleAnime());
	}

	function handleSearch() {
		SearchAnime(document.getElementById('SearchAnime').value)
			.then((anime) => {
				setAnime(anime.data[0]);
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>AniEnhance</h1>
			</header>
			<div className={Styles.App_body}>
				<Content
					title={'¿Qué es AniEnhance?'}
					content={
						'AniEnhance es una forma de encontrar varias cosas relacionadas con el anime, por ejemplo arte, animes, quotes de personajes y imágenes de waifus (yo creo que esto es justo por lo que vienes), y eso no es todo ya que esta en fase de desarrollo asi que se vendrán mas cosas.'
					}
				/>
				<div className={Styles.input_container}>
					<Button
						content={'Random'}
						event={handleAnime}
					/>
					<Button
						content={'Buscar'}
						event={handleSearch}
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

					<Checkbox
						id={'SFW'}
						label={'SFW'}
						name={'SFW'}
					/>
				</div>

				<AnimePanel anime={anime} />
			</div>

			<footer className='App-footer'>
				<h3>kksd</h3>
			</footer>
		</div>
	);
}

export default App;
