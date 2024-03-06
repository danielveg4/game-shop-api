import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetch-data';

export const useFetch = url => {
	const [fetchStatus, setFetchStatus] = useState({
		data: undefined,
		loading: true,
		error: undefined
	});

	useEffect(() => {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => {
			fetchData(url, setFetchStatus, controller.signal);
		}, 300);

		return () => {
			controller.abort();
			clearTimeout(timeoutId);
		};
	}, [url]);

	return { ...fetchStatus };
};