import React, { useEffect, useState } from 'react';

export default function Joke() {
  const [joke, setJoke] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/jokes/random')
      .then(response => response.json())
      .then(results => {
        setLoading(false); 
        setJoke(results.setup + ' ' + results.punchline);
      }).catch(error => {
        setLoading(false);
        setErrorMsg('Error occured when fetching data');
    })
  }, []);

  return (
    <div>
      <h2>Joke API</h2>
      {loading && <div>Loading...</div>}
      {joke && (<div>{joke}</div>)}
      {errorMsg && <div>{errorMsg}</div>}
    </div>
  );
}
