export async function getAnime(animeID) {
	let response = await fetch('https://api.jikan.moe/v4/random/anime', { method: 'GET' });

	return response.json();
}

export async function SearchAnime(anime) {
	console.log(anime);
	let response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}`, { method: 'GET' });

	return response.json();
}
