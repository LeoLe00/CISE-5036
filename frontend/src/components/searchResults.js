import styles from './searchResults.module.css';

export default function SearchResults(props) {

    const test1 = new Map([
        ["id", "1"],
        ["title", "The Impact of Test-Driven Development on Software Quality"],
        ["authors", "A. Johnson, B. Smith, C. Davis"],
        ["year", "2018"],
        ["journalConference", "IEEE International Conference on Software Testing, Verification, and Validation"],
        ["sePractice", "Test-Driven Development"],
        ["claim", "TDD improves software quality by catching defects early in the development process"],
        ["evidenceResult", "Supporting"],
        ["researchType", "Empirical Study"],
        ["participantType", "Academic"]
    ]);
    const test2 = new Map([
        ["id", "2"],
        ["title", "Adoption and Challenges of Test-Driven Development in Industry"],
        ["authors", "L. Garcia, S. Patel, M. Lee"],
        ["year", "2019"],
        ["journalConference", "International Symposium on Empirical Software Engineering and Measurement"],
        ["sePractice", "Test-Driven Development"],
        ["claim", "TDD adoption is increasing in the software industry, but challenges persist"],
        ["evidenceResult", "Mixed"],
        ["researchType", "Survey and Case Study"],
        ["participantType", "Industry"]
    ]);
    const test3 = new Map([
        ["id", "3"],
        ["title", "Evaluating the Effectiveness of Test-Driven Development in Agile Teams"],
        ["authors", "K. Thompson, J. Roberts, A. Davis"],
        ["year", "2020"],
        ["journalConference", "Agile Conference"],
        ["sePractice", "Test-Driven Development"],
        ["claim", "TDD is an effective practice in improving code quality and reducing defects"],
        ["evidenceResult", "Supporting"],
        ["researchType", "Empirical Study"],
        ["participantType", "Industry"]
    ]);

    const testResults = [
        test1,
        test2,
        test3
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