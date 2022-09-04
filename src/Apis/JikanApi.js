export async function getAnime() {
	let response = await fetch('https://api.jikan.moe/v4/random/anime', { method: 'GET' });

	return response.json();
}

export async function SearchAnime(anime) {
	let URL = `https://api.jikan.moe/v4/anime?q=${anime}`;

	let response = await fetch(URL, { method: 'GET' });

	return response.json();
}
