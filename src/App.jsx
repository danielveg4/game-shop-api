import AsideFilters from './components/aside-filter/AsideFilters';
import Header from './components/header/Header';
import GameList from './components/gamesList/GamesList';
import useAppLogic from './hooks/useAppLogic';

const App = () => {
	const {
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
	} = useAppLogic();

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<>
			<Header setSearch={setSearch} />
			<AsideFilters
				setOrderBy={setOrderBy}
				platforms={platforms}
				genres={genres}
				genreSelected={genreSelected}
				setGenre={setGenre}
				platformSelected={platformSelected}
				setPlatform={setPlatform}
			/>
			<GameList games={filteredGames} orderBy={orderBy} search={search} />
		</>
	);
};

export default App;
