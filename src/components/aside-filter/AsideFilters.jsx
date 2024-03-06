import { v4 } from 'uuid';

const AsideFilters = ({
	setOrderBy,
	platforms,
	genres,
	genreSelected,
	setGenre,
	platformSelected,
	setPlatform
}) => {
	const gamesPlatforms = getAllPlatforms(platforms || []);
	const gamesGenres = getAllGenres(genres || []);

	return (
		<form>
			<select onChange={event => handleOrderBy(event, setOrderBy)}>
				<option value='0'>Ordenar por Defecto</option>
				<option value='1'>Ordenar por Nombre</option>
			</select>
			<select
				value={platformSelected}
				onChange={event => handlePlatform(event, setPlatform)}
			>
				<option value='All'>All</option>
				{gamesPlatforms.map(gamesPlatform => (
					<option key={gamesPlatform.id} value={gamesPlatform.value}>
						{gamesPlatform.name}
					</option>
				))}
			</select>

			<select
				value={genreSelected}
				onChange={event => handleGenre(event, setGenre)}
			>
				<option value='All'>All</option>
				{gamesGenres.map(gamesGenre => (
					<option key={gamesGenre.id} value={gamesGenre.value}>
						{gamesGenre.name}
					</option>
				))}
			</select>
		</form>
	);
};

const handleOrderBy = (event, setOrderBy) => {
	const selectedValue = event.target.value;
	setOrderBy(selectedValue);
};

const handlePlatform = (event, setPlatformSelected) => {
	const selectedPlatform = event.target.value;
	setPlatformSelected(selectedPlatform);
};

const handleGenre = (event, setGenreSelected) => {
	const selectedGenre = event.target.value;
	setGenreSelected(selectedGenre);
};

const getAllPlatforms = platformsArray => {
	return platformsArray.map(platform => ({
		id: v4(),
		value: platform.id,
		name: platform.name
	}));
};

const getAllGenres = genresArray => {
	return genresArray.map(genre => ({
		id: v4(),
		value: genre.id,
		name: genre.name
	}));
};

export default AsideFilters;
