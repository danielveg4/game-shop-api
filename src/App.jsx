import { useFetch } from './hooks/useFetch';

const App = () => {
	const { data, loading, error } = useFetch();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error...</div>;

	return (
		<>
			<p>{data.results[1].games[1].name}</p>
			<h1>Núcleo de la aplicación</h1>
		</>
	);
};

export default App;
