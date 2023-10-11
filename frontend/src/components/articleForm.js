"use client";
import { useState } from 'react';
import styles from './articleForm.module.css';

export default function ArticleForm() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [journal, setJournal] = useState('');
  const [year, setYear] = useState('');
  const [volume, setVolume] = useState('');
  const [number, setNumber] = useState('');
  const [pages, setPages] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the data submission or processing here
    // For now, let's just log the entered details
    console.log({
      author,
      title,
      journal,
      year,
      volume,
      number,
      pages,
    });
    try {
      const response = await fetch('https://cise-5036.vercel.app/api/suggest', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });
  
      const result = await response.json();
  
      if (response.status === 200) {
        console.log(result.success); 
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error('Error while submitting the article:', error);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.articleFormContainer}>
        <h2>Research Article Suggestion Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="author">Author(s):</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="journal">Journal:</label>
            <input
              type="text"
              id="journal"
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="year">Year:</label>
            <input
              type="text"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="volume">Volume:</label>
            <input
              type="text"
              id="volume"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="number">Number:</label>
            <input
              type="text"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="pages">Pages:</label>
            <input
              type="text"
              id="pages"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
