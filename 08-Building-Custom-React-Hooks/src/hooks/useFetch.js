import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setfetchedData] = useState(initialValue);

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setfetchedData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data. //or use a prop to get the error data' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);

      return {
        isFetching,
        error,
        fetchedData,
        setfetchedData
      }
}