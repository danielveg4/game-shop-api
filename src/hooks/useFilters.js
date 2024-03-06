import { useState } from 'react';

export const useFilters = () => {
	const [gameFilters, setGameFilters] = useState({
		search: '',
		genreSelected: 'All',
		platformSelected: 'All'
	});

	const setSearch = search => {
		setGameFilters({
			...gameFilters,
			search,
			genreSelected: 'All',
			platformSelected: 'All'
		});
	};

	const setGenre = genreSelected => {
		setGameFilters({
			...gameFilters,
			genreSelected,
			search: '',
			platformSelected: 'All'
		});
	};

	const setPlatform = platformSelected => {
		setGameFilters({
			...gameFilters,
			platformSelected,
			search: '',
			genreSelected: 'All'
		});
	};

	return { ...gameFilters, setSearch, setGenre, setPlatform };
};