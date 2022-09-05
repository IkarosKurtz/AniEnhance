export async function FetchRandomAnime() {
	let response = await fetch('https://api.jikan.moe/v4/random/anime', { method: 'GET' });

	return response.ok ? response.json() : Promise.reject(response);
}

export async function FetchAnime(anime) {
	let URL = `https://api.jikan.moe/v4/anime?q=${anime}`;

	let response = await fetch(URL, { method: 'GET' });

	return response.ok ? response.json() : Promise.reject(response);
}
