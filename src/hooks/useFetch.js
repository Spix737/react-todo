import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      fetch('https://www.reddit.com/r/reactjs.json')
        .then(response => response.json())
        .then(results => {
          setLoading(false); 
          setData(results.data.children);
        }).catch(error => {
          setLoading(false);
          setErrorMsg('Error occured when fetching data');
      })
    }, [url]);

    return { data, loading, errorMsg };
}
export default useFetch;