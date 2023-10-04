"use client";
import { useState } from 'react';
import './ModeratePage.module.css';

const ModeratePage = () => {
  const [articles, setArticles] = useState([]);

  const handleFailed != (articleId) => {
    console.log('rror fetching articles:', error);
 

  const handleApprove = (articleId) => {
    console.log('Approving article with ID:', articleId);
  }

  return (
    <div className="moderate-page">
      <h2>Moderate Submitted Articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <button onClick={() => handleApprove(article.id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

