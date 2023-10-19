"use client";
import React, { useState } from 'react';
import styles from './AnalysisPage.module.css';

function AnalysisPage() {
    const [approvedArticles, setApprovedArticles] = useState([]);
    
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);


    const [selectedArticle, setSelectedArticle] = useState(null);
    const [analysisText, setAnalysisText] = useState('');

    const handleAnalysisSubmit = () => {
        const updatedArticles = approvedArticles.map(article => {
            if (article.id === selectedArticle.id) {
                return { ...article, analysis: analysisText };
            }
            return article;
        });
        setApprovedArticles(updatedArticles);
        setSelectedArticle(null);
        setAnalysisText('');
    };

    const fetchArticles = async () => {
        try {
          const response = await fetch('http://localhost:8082/api/moderate/approved');
          const data = await response.json();
          setArticles(data);
          setLoading(false);
        } catch (error) {
          console.error('Failed to fetch articles:', error);
          setLoading(false);
        }
      };

    return (
        <div className="analysis-page">
            <h2>Analysis Page</h2>
            <ul>
                {approvedArticles.map(article => (
                    <li key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                        <button onClick={() => setSelectedArticle(article)}>Write Analysis</button>
                        {article.analysis && <div><strong>Analysis: </strong>{article.analysis}</div>}
                    </li>
                ))}
            </ul>

            {selectedArticle && (
                <div className="analysis-modal">
                    <h3>Analyze: {selectedArticle.title}</h3>
                    <textarea
                        value={analysisText}
                        onChange={e => setAnalysisText(e.target.value)}
                        placeholder="Write your analysis here..."
                    />
                    <button onClick={handleAnalysisSubmit}>Submit Analysis</button>
                </div>
            )}

{loading ? (
        <p>Loading articles...</p>
      ) : (
        articles.map(article => (
          <div key={article._id} className={styles.article}>
            <h3>{article.title}</h3>
            <p>Author: {article.author}</p>
            <p><strong>Journal:</strong> {article.journal}</p>
            <p><strong>Year:</strong> {article.year}</p>
            <button onClick={() => handleApprove(article._id)}>Approve</button>
            <button onClick={() => handleReject(article._id)}>Reject</button>
          </div>
        ))
      )}
        </div>
    );
}

export default AnalysisPage;
