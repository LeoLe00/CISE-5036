"use client";
import React, { useState } from 'react';
import './ModeratePage.module.css';

function ModeratePage() {
    const [articles, setArticles] = useState([
        { id: 1, title: 'Article 1', content: 'This is the content of Article 1.' },
        { id: 2, title: 'Article 2', content: 'This is the content of Article 2.' }
    ]);

    const approveArticle = (articleId) => {
 
        const updatedArticles = articles.filter(article => article.id !== articleId);
        setArticles(updatedArticles);
    };

    return (
        <div className="moderate-page">
            <h2>Moderate Articles</h2>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                        <button onClick={() => approveArticle(article.id)}>Approve</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ModeratePage;

