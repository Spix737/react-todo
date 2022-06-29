import React, { useEffect, useState } from 'react';

export default function Reddit() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then(response => response.json())
      .then(results => {
        setLoading(false); 
        setPosts(results.data.children);
      }).catch(error => {
        setLoading(false);
        setErrorMsg('Error occured when fetching data');
    })
  }, []);

  return (
    <div>
      <h2>Reddit API</h2>
      {loading && <div>Loading...</div>}
      {posts && (
        <ul>
          {posts.map(post => (
            <li key={post.data.id}>
              <a href={`https://reddit.com${post.data.permalink}`}>
                {post.data.title}
              </a>
            </li>
          ))}
        </ul>
      )}
      {errorMsg && <div>{errorMsg}</div>}
    </div>
  );
}
