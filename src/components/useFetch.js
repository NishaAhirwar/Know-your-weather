import React, { useEffect, useState } from "react";

export default function useFetch(url) {

  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData(url) {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(" Unable to fetch data");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData(url)

  }, [url]);

  return {data, loading, error };
}
