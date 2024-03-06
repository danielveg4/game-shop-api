import { StyledGamesPhoto } from './styles';

const GameList = ({ games }) => {
	console.log(games);
	return (
		<>
			{games.map(game => (
				<div key={game.id}>
					<h4>{game.name}</h4>
					<StyledGamesPhoto src={game.background_image} alt={game.name} />
					<p>
						Plataformas disponibles:{' '}
						{game.parent_platforms
							.map(platform => platform.platform.name)
							.join(', ')}
					</p>
					<p>Género: {game.genres.map(genre => genre.name).join(', ')}</p>
					{game.rating && <p>Rating: {game.rating}</p>}
					{game.released && <p>Fecha de lanzamiento: {game.released}</p>}
				</div>
			))}
		</>
	);
};

export default GameList;
