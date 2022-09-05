import React, { useEffect, useState } from 'react';

// Api
import { FetchRandomWaifuPic } from '../Apis/WaifuPicApi';

// Components
import { BlankSpace, Button, Checkbox } from '../components/GeneralComponents';

// Styles
import Styles from './WaifuPics.module.css';
import LoadingStyle from '../components/Loading.module.css';

const filters = {
	sfw: {
		uniform: {
			type: 'Uniform',
			id: 'uniform',
			value: false,
		},

		maid: {
			type: 'Maid',
			id: 'maid',
			value: false,
		},

		oppai: {
			type: 'Oppai',
			id: 'oppai',
			value: false,
		},

		selfies: {
			type: 'Selfies',
			id: 'selfies',
			value: false,
		},
	},
	nsfw: {
		ass: {
			type: 'Ass',
			id: 'ass',
			value: false,
		},

		hentai: {
			type: 'Hentai',
			id: 'hentai',
			value: false,
		},

		milf: {
			type: 'Milf',
			id: 'milf',
			value: false,
		},

		oral: {
			type: 'Oral',
			id: 'oral',
			value: false,
		},

		paizuri: {
			type: 'Paizuri',
			id: 'paizuri',
			value: false,
		},

		ecchi: {
			type: 'Ecchi',
			id: 'ecchi',
			value: false,
		},

		ero: {
			type: 'Ero',
			id: 'ero',
			value: false,
		},
	},
};

export function WaifuPics() {
	const [waifuPic, setWaifuPic] = useState(null);

	useEffect(() => {
		handlerWaifuPic();
	}, []);

	async function handlerWaifuPic() {
		setWaifuPic(null);
		setFilters();

		let waifu = await FetchRandomWaifuPic(filters);
		waifu = waifu.images[0];

		setWaifuPic(waifu);
	}

	function setFilters() {
		Object.entries(filters.sfw).forEach((element) => {
			element[1].value = document.querySelector(`#${element[1].id}`).checked;
		});

		Object.entries(filters.nsfw).forEach((element) => {
			element[1].value = document.querySelector(`#${element[1].id}`).checked;
		});
	}

	if (!waifuPic)
		return (
			<>
				<h3>Filtros: </h3>
				<Filters />
				<div
					className={LoadingStyle.loader_container}
					style={{ backgroundColor: `#DB6558`, borderColor: `#DB6558`, height: '600px' }}
				>
					<div className={LoadingStyle.loader}></div>
				</div>
				<Button
					content={'Random'}
					id={'randomPic'}
					event={handlerWaifuPic}
				/>
			</>
		);

	return (
		<>
			<h3 style={{ fontFamily: 'KanitMedium' }}>Filtros: </h3>
			<Filters />

			<div
				className={Styles.panel}
				style={{ backgroundColor: `${waifuPic.dominant_color}`, borderColor: `${waifuPic.dominant_color}` }}
			>
				<h1 style={{ marginBottom: '0' }}>Tu waifu</h1>
				<div className={Styles.image_panel}>
					<img
						src={waifuPic.url}
						alt='Waifu'
					/>
				</div>
			</div>
			<Button
				content={'Random'}
				id={'randomPic'}
				event={handlerWaifuPic}
			/>
		</>
	);
}

function Filters() {
	return (
		<div className={Styles.filters_container}>
			<div className={Styles.sfw_filters}>
				<Checkbox
					id={filters.sfw.uniform.id}
					label={filters.sfw.uniform.type}
				/>

				<Checkbox
					id={filters.sfw.maid.id}
					label={filters.sfw.maid.type}
				/>

				<Checkbox
					id={filters.sfw.selfies.id}
					label={filters.sfw.selfies.type}
				/>

				<Checkbox
					id={filters.sfw.oppai.id}
					label={filters.sfw.oppai.type}
				/>
			</div>

			<BlankSpace blankSpaces={1} />

			<div className={Styles.nsfw_filters}>
				<div>
					<Checkbox
						id={filters.nsfw.ass.id}
						label={filters.nsfw.ass.type}
					/>
					<Checkbox
						id={filters.nsfw.ecchi.id}
						label={filters.nsfw.ecchi.type}
					/>
					<Checkbox
						id={filters.nsfw.ero.id}
						label={filters.nsfw.ero.type}
					/>
					<Checkbox
						id={filters.nsfw.hentai.id}
						label={filters.nsfw.hentai.type}
					/>
				</div>
				<div>
					<Checkbox
						id={filters.nsfw.milf.id}
						label={filters.nsfw.milf.type}
					/>
					<Checkbox
						id={filters.nsfw.oral.id}
						label={filters.nsfw.oral.type}
					/>
					<Checkbox
						id={filters.nsfw.paizuri.id}
						label={filters.nsfw.paizuri.type}
					/>
				</div>
			</div>
		</div>
	);
}
