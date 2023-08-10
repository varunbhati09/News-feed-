// src/components/HomeFeed.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import the CSS file with styles

function HomeFeed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = '2cd5b7be3363460892ef7c92d1490377';
    const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(newsApiUrl).then((response) => {
      setArticles(response.data.articles);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="header">Home Feed</h2>
      <div className="feed">
        {articles.map((article) => (
          <div key={article.title} className="article">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <button className="button">Save</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeFeed;

// Other components are similar with class names added, you can apply the same style to them.
