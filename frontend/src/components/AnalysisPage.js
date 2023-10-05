"use client";
import React, { useState } from 'react';
import styles from './AnalysisPage.module.css';

function AnalysisPage() {
    const [approvedArticles, setApprovedArticles] = useState([
        { id: 1, title: 'Article 1', content: 'This is the content of Article 1.', analysis: '' },
        { id: 2, title: 'Article 2', content: 'This is the content of Article 2.', analysis: '' },
    ]);

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
        </div>
    );
}

export default AnalysisPage;
