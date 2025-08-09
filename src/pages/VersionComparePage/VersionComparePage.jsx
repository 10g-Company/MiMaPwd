import { useEffect } from 'react';
import './VersionComparePage.css';

function VersionComparePage() {
    useEffect(() => {
        document.title = "Version Comparison";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <section className="section" id="version-compare">
                <h1>Version Comparison</h1>
                <p>Compare the features and improvements in different versions of MiMaPwd.</p>
                <table className="version-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Version 1.0</th>
                            <th>Version 2.0</th>
                            <th>Version 3.0</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Offline Storage</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Encryption</td>
                            <td>AES-256</td>
                            <td>AES-256 + RSA</td>
                            <td>AES-256 + RSA + Two-Factor Authentication</td>
                        </tr>
                        <tr>
                            <td>Autofill Feature</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>Yes (Improved)</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
                <p className="note">Note: Always ensure you are using the latest version for the best security and features.</p>
            </section>
        </>
    );
}

export default VersionComparePage;