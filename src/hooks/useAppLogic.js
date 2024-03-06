import { useState, useEffect } from 'react';
import { useFilters } from './useFilters';
import { useFetch } from './useFetch';
import { urlToUse, fetchGetAllPlatforms, fetchGetAllGenres, sortedBy } from '../utils/apiUtils';

const useAppLogic = () => {
    const [orderBy, setOrderBy] = useState('0');
    const { search, genreSelected, platformSelected, setSearch, setGenre, setPlatform } = useFilters();
    const [genres, setGenres] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const urlToFetch = urlToUse(search, genreSelected, platformSelected);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const platformsData = await fetchGetAllPlatforms();
            setPlatforms(platformsData);

            const genresData = await fetchGetAllGenres();
            setGenres(genresData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const { data: games, loading, error } = useFetch(urlToFetch);
    const filteredGames = sortedBy(games?.results, orderBy);

    return {
        orderBy,
        setOrderBy,
        search,
        genreSelected,
        platformSelected,
        setSearch,
        setGenre,
        setPlatform,
        genres,
        platforms,
        filteredGames,
        loading,
        error
    };
};

export default useAppLogic;