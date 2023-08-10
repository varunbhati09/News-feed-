import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

function Recommendations() {
  const [recommendedArticles, setRecommendedArticles] = useState([]);

  useEffect(() => {
    const apiKey = '2cd5b7be3363460892ef7c92d1490377';
    const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(newsApiUrl).then((response) => {
      setRecommendedArticles(response.data.articles);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="header">Recommended News</h2>
      <div className="feed">
        {recommendedArticles.map((article) => (
          <div key={article.title} className="article">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;