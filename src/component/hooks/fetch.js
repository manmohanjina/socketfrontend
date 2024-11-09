import { useEffect, useState, useCallback } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState({ isLoading: false, isError: '' });
    const getData = useCallback(async (fetchUrl) => {
        setStatus({ isLoading: true, isError: '' });
        try {
            let response = await fetch(fetchUrl);  // Change variable name here
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let fetchData = await response.json(); // Use response.json() to get fetchData
    
            setData(fetchData);
            console.log('fetch function is getting called');
            
            setStatus({ isLoading: false, isError: '' });
        } catch (error) {
            console.error(error, 'error');
            setStatus({ isLoading: false, isError: true });
        }
    }, []);
    
    
    useEffect(() => {
        getData(url);
    }, [url, getData]);

    return { data, status };
}

export default useFetchData;
