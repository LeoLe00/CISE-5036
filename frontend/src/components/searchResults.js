"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './searchResults.module.css';
import axios from 'axios';

export default function SearchResults(props) {
/*
    const tddArticle1 = new Map([
        ["id", "1"],
        ["title", "The Impact of Test-Driven Development on Software Quality: A Controlled Experiment"],
        ["authors", "Munir, H., Wnuk, K., Petersen, K."],
        ["year", "2014"],
        ["journalConference", "IEEE Transactions on Software Engineering"],
        ["sePractice", "Test-Driven Development"],
        ["claim", "TDD improves software quality by catching defects early in the development process"],
        ["evidenceResult", "Supporting"],
        ["researchType", "Controlled Experiment"],
        ["participantType", "Academic"]
    ]);
    
    const tddArticle2 = new Map([
        ["id", "2"],
        ["title", "Does Test-Driven Development Really Improve Software Design Quality?"],
        ["authors", "Janzen, D. S., Saiedian, H."],
        ["year", "2008"],
        ["journalConference", "International Conference on Software Engineering"],
        ["sePractice", "Test-Driven Development"],
        ["claim", "TDD improves software quality by catching defects early in the development process"],
        ["evidenceResult", "Supporting"],
        ["researchType", "Empirical Study"],
        ["participantType", "Academic"]
    ]);
    
    const tddArticle3 = new Map([
        ["id", "3"],
        ["title", "Challenging the Effectiveness of Test-Driven Development: A Critical Review"],
        ["authors", "Smith, J., Brown, A."],
        ["year", "2019"],
        ["journalConference", "International Conference on Software Engineering"],
        ["sePractice", "Test-Driven Development"],
        ["claim", "TDD improves software quality by catching defects early in the development process"],
        ["evidenceResult", "Opposing"],
        ["researchType", "Literature Review"],
        ["participantType", "Academic"]
    ]);
    

    const testResults = [
        tddArticle1,
        tddArticle2,
        tddArticle3
    ];
    */
    const [article, setArticle] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8082/api/articles/${id}`)
            .then((res) => {
                setArticle(res.data);
            })
            .catch((err) => {
                console.log('Error from searchResults');
            });
    }, [id]);

    const ArticleResult = (
        <div>
          <table className='table table-hover table-dark'>
            <tbody>
              <tr>
                <td>{article.author}</td>
                <td>{article.title}</td>
                <td>{article.journal}</td>
                <td>{article.year}</td>
                <td>{article.volume}</td>
                <td>{article.number}</td>
                <td>{article.pages}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
      

    return (
        <>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Authors</th>
                    <th>Year</th>
                    <th>Journal/Conference</th>
                    <th>SE Practice</th>
                    <th>Claim</th>
                    <th>Evidence Result</th>
                    <th>Research Type</th>
                    <th>Participant Type</th>
                </tr>
            </thead>
            <tbody>
            {ArticleResult}
            </tbody>
        </table>
    </>
    );
};