"use client";
import { useState, useEffect } from 'react';
import styles from './AnalysisPage.module.css';

function AnalysisPage() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [analysis, setAnalysis] = useState('');

  useEffect(() => {
    const fetchApprovedArticles = async () => {
      try {
        const response = await fetch('http://localhost:8082/api/approved');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Failed to fetch approved articles:', error);
      }
    };

    fetchApprovedArticles();
  }, []);

  const handleSubmitAnalysis = async () => {
    
    try {
     
      
      console.log(`Submitting analysis for article ${selectedArticle._id}:`, analysis);
      
      
      setSelectedArticle(null);
      setAnalysis('');
    } catch (error) {
      console.error('Failed to submit analysis:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Analysis Page</h2>

      {selectedArticle ? (
        <div>
          <h3>Analyzing: {selectedArticle.title}</h3>
          <textarea 
            value={analysis}
            onChange={e => setAnalysis(e.target.value)}
            placeholder="Enter your analysis here"
          />
          <button onClick={handleSubmitAnalysis}>Submit Analysis</button>
        </div>
      ) : (
        <div>
          <h3>Select an article to analyze:</h3>
          {articles.map(article => (
            <div key={article._id} className={styles.article} onClick={() => setSelectedArticle(article)}>
              <h4>{article.title}</h4>
              <p>Author: {article.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AnalysisPage;