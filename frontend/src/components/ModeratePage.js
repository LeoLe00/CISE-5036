"use client";
import React, { useState } from 'react';
import './ModeratePage.module.css';

function ModeratePage() {
    const initialArticles = [
        { id: 1, title: 'Article 1', content: 'This is the content of Article 1.' },
        { id: 2, title: 'Article 2', content: 'This is the content of Article 2.' },
    ];
    
    const [articles, setArticles] = useState(initialArticles);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedArticle, setSelectedArticle] = useState(null);

    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const approveArticle = (articleId) => {
        const updatedArticles = articles.filter(article => article.id !== articleId);
        setArticles(updatedArticles);
    };

    const rejectArticle = (articleId) => {
        const updatedArticles = articles.filter(article => article.id !== articleId);
        setArticles(updatedArticles);
    };

    const viewDetails = (article) => {
        setSelectedArticle(article);
    };

    const closeModal = () => {
        setSelectedArticle(null);
    };

    return (
        <div className="moderate-page">
            <h2>Moderate Articles</h2>
            
            <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />

            <ul>
                {filteredArticles.map(article => (
                    <li key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                        <button onClick={() => approveArticle(article.id)}>Approve</button>
                        <button onClick={() => rejectArticle(article.id)}>Reject</button>
                        <button onClick={() => viewDetails(article)}>View Details</button>
                    </li>
                ))}
            </ul>

            {selectedArticle && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>{selectedArticle.title}</h3>
                        <p>{selectedArticle.content}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ModeratePage;


