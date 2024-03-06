export const fetchData = async (url, setFetchStatus, signal, ...options) => {
	try {
		const response = await fetch(url, { signal }, ...options);
		if (!response.ok) {
			throw new Error('error del usuario');
		}

		const data = await response.json();
		setFetchStatus({ data, loading: false, error: undefined });
		return data;
	} catch (error) {
		const isAborted = error.name === 'AbortError';

		setFetchStatus({
			data: undefined,
			loading: false,
			error: !isAborted
		});
	}
};