import { URLS } from "../constants/api";

export const urlToUse = (search, genreSelected, platformSelected) => {
    if (genreSelected !== 'All') return URLS.GAMES_BY_GENRE + genreSelected;
    if (platformSelected !== 'All') return URLS.GAMES_BY_PLATFORM + platformSelected;
    if (!search) return URLS.ALL_GAMES;
    return URLS.SEARCH + search;
};

export const fetchGetAllPlatforms = async () => {
    try {
        const response = await fetch(URLS.PLATFORMS);
        const data = await response.json();
        return data.results; // Devuelve los datos en lugar de establecer los estados
    } catch (error) {
        console.error('Error fetching platforms:', error);
        throw error; // Propaga el error para manejarlo en el componente que llama a esta función
    }
};

export const fetchGetAllGenres = async () => {
    try {
        const response = await fetch(URLS.GENRES);
        const data = await response.json();
        return data.results; // Devuelve los datos en lugar de establecer los estados
    } catch (error) {
        console.error('Error fetching genres:', error);
        throw error; // Propaga el error para manejarlo en el componente que llama a esta función
    }
};

export const sortedBy = (games, orderBy) => {
    if (!games) return;
    const sortedGames = [...games];
    if (orderBy === '0') return sortedGames;
    return sortedGames.sort((a, b) => a.name.localeCompare(b.name));
};