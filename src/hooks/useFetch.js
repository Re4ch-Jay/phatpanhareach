import {useState, useEffect} from 'react'

export default function useFetch(apiEndpoint) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(apiEndpoint)
        .then((response) => {
            if (!response.ok) {
                throw Error(`Error: ${response.status} - ${response.statusText}`);
            }
        return response.json();
        })
        .then((data) => {
            setData(data);
        })
        .catch((error) => {
            console.error(error);
            setError(error);
        });
    }, [apiEndpoint])

  return {data, error}
}
