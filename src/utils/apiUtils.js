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
        return data.results; 
    } catch (error) {
        console.error('Error fetching platforms:', error);
        throw error; 
    }
};

export const fetchGetAllGenres = async () => {
    try {
        const response = await fetch(URLS.GENRES);
        const data = await response.json();
        return data.results; 
    } catch (error) {
        console.error('Error fetching genres:', error);
        throw error;
    }
};

export const sortedBy = (games, orderBy) => {
    if (!games) return;
    const sortedGames = [...games];
    if (orderBy === '0') return sortedGames;
    return sortedGames.sort((a, b) => a.name.localeCompare(b.name));
};