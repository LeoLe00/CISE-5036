import styles from './searchResults.module.css';

export default function SearchResults(props) {

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

    return (
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
                {testResults.map((result, index) => (
                    <tr key={result.get("id")}>
                        <td>{result.get("title")}</td>
                        <td>{result.get("authors")}</td>
                        <td>{result.get("year")}</td>
                        <td>{result.get("journalConference")}</td>
                        <td>{result.get("sePractice")}</td>
                        <td>{result.get("claim")}</td>
                        <td>{result.get("evidenceResult")}</td>
                        <td>{result.get("researchType")}</td>
                        <td>{result.get("participantType")}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};