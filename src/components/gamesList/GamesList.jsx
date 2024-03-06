const GameList = ({ games }) => {
	return (
		<>
			{games.map(game => (
				<div key={game.id}>
					<h4>{game.name}</h4>
				</div>
			))}
		</>
	);
};

export default GameList;
