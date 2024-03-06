import { useEffect, useState } from "react";
import { apiKey } from "../constants/api";

export const useFetch = (url) => {
    const [fetchStatus, setFetchStatus] = useState({
        data: undefined,
        loading: true,
        error: undefined
    });

	useEffect(() => {
        const controller = new AbortController();

        fetchData(setFetchStatus, controller.signal);

        return () => controller.abort();
	}, [url]);

    return { ...fetchStatus };
    
};

const fetchData = async (setFetchStatus, signal, ...options) => {
    try {
	const url = `https://api.rawg.io/api/platforms?key=${apiKey}`;
	const response = await fetch(url, { signal }, ...options);
    if (!response.ok) throw new Error("Network response was not ok");
	const data = await response.json();
    setFetchStatus({ data, loading: false, error: undefined });
	console.log(data);
    } catch (error) {
       
        setFetchStatus({ data: undefined, loading: false, error });
    }
};