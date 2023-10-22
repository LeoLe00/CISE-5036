'use client'
import { useState, useEffect } from 'react';
import styles from './AnalysisPage.module.css';



function AnalysisPage() {
  const [approvedArticles, setApprovedArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [extractedInfo, setExtractedInfo] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchApprovedArticles = async () => {
      try {
        const response = await fetch('https://cise-5036-bbkkk.vercel.app/api/moderate/approved');
        const data = await response.json();
        setApprovedArticles(data);
      } catch (error) {
        console.error('Failed to fetch approved articles:', error);
      }
    };

    fetchApprovedArticles();
  }, []);

  const handleAnalysisSubmit = async () => {
    try {
      const response = await fetch(`https://cise-5036-bbkkk.vercel.app/api/analysis/addInfo/${selectedArticle.title}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          extractedData: extractedInfo,
        }),
      });

      if (response.status === 200) {
        setMessage('Information added successfully.');
      } else {
        setMessage('Failed to add information.');
      }
    } catch (error) {
      console.error('Error:', error);
        setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Analysis Page</h2>
      <select onChange={(e) => setSelectedArticle(approvedArticles.find(article => article._id === e.target.value))}>
        <option value="">Select an article</option>
        {approvedArticles.map(article => (
          <option key={article._id} value={article._id}>{article.title}</option>
        ))}
      </select>

      {selectedArticle && (
        <div className={styles.analysisContainer}>
          <h3>{selectedArticle.title}</h3>
          <textarea
            placeholder="Extracted Information"
            value={extractedInfo}
            onChange={(e) => setExtractedInfo(e.target.value)}
          ></textarea>
          <button onClick={handleAnalysisSubmit}>Submit Analysis</button>
          {message && <div className={styles.message}>{message}</div>}

        </div>
      )}
    </div>
  );
}

export default AnalysisPage;

