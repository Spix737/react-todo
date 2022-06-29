import React from 'react';
import useFetch from './hooks/useFetch';

export default function Reddit() {
  const { data: posts, loading, errorMsg } = useFetch('https://www.reddit.com/r/reactjs.json');

  return (
    <div>
      <h2>Reddit API</h2>
      {loading && <div>Loading...</div>}
      {posts && (
        <ul>
          {posts.data.children.map(post => (
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
