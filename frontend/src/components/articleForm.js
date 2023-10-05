"use client";
import { useEffect, useState } from 'react';
import styles from './articleForm.module.css';

export default function ArticleForm() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [journal, setJournal] = useState('');
  const [year, setYear] = useState('');
  const [volume, setVolume] = useState('');
  const [number, setNumber] = useState('');
  const [pages, setPages] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8082/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: articleName }),
    })
    .then((response) => response.json())
      .then((data) => console.log('Article created:', data))
      .catch((error) => console.error('Error creating article:', error));

    const data = await response.json();
    setArticles([...articles, data]);
    setArticleName('');
  };

  useEffect(() => {
    fetchArticles('');
  }, []);
  


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
