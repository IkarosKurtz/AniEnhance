const URL_FILTERS = {
	url_strings: {
		selected_tags: 'selected_tags=',
		many: 'many=',
		orientation: 'orientation=',
		order_by: 'order_by=',
	},
};

export async function FetchRandomWaifuPic(filters) {
	const URL = UrlFilters(filters);

	let response = await fetch(URL, { method: 'GET' });

	return response.ok ? response.json() : Promise.reject(response);
}

function UrlFilters(filters) {
	let URL = `https://api.waifu.im/random`;
	let basicUrl = true;

	Object.entries(filters.sfw).forEach((element) => {
		if (element[1].value) basicUrl = false;
		//console.log(`filtro ${element[0]}: ${element[1].value}`);
	});

	Object.entries(filters.nsfw).forEach((element) => {
		if (element[1].value) basicUrl = false;
		//console.log(`filtro ${element[0]}: ${element[1].value}`);
	});
	//console.log(`SE USA EL URL BASE: ${basicUrl}`);

	if (basicUrl) return URL;

	URL = `https://api.waifu.im/random/?orientation=PORTRAIT&`;

	Object.entries(filters.sfw).forEach((element) => {
		if (element[1].value) URL += `${URL_FILTERS.url_strings.selected_tags}${element[1].id}&`;
	});

	Object.entries(filters.nsfw).forEach((element) => {
		if (element[1].value) URL += `${URL_FILTERS.url_strings.selected_tags}${element[1].id}&`;
	});

	return URL;
}
