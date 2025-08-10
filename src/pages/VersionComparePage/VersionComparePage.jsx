import { useEffect } from 'react';
import './VersionComparePage.css';
import { usePopup } from '../../behaviors/PopupContext';

function VersionComparePage() {
    useEffect(() => {
        document.title = "Version Comparison";
    }, []); // Empty dependency array = runs once on mount

    const { openPopup } = usePopup();
    const showPopup1 = () => {
        openPopup('popup1', (
            <>
                <h2>Basic Version Record Limit</h2 >
                <p>The Basic version of the app allows you to store a maximum of 25 records.</p>
                <br/>
                <p>If you are over the 25 records limit, you can delete existing record to create a new one.</p>
                <br/>
                <p>To store more records without any limitations, consider upgrading to the Pro Version.</p>
            </>
        ));
    };

    return (
        <>
            <br />
            <h1><span className="label basic">Basic</span> vs <span className="label pro">Pro</span></h1>

            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th className="feature-column">Feature</th>
                            <th className="comparison-column basic">Basic</th>
                            <th className="comparison-column pro">Pro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Max Entries</td>
                            <td className="comparison-column">
                                <span className="popup-trigger" onClick={(showPopup1)}>25 records</span>
                            </td>
                            <td className="comparison-column">Unlimited records</td>
                        </tr>
                        <tr>
                            <td>Database password protected</td>
                            <td className="check comparison-column"></td>
                            <td className="check comparison-column"></td>
                        </tr>
                        <tr>
                            <td>Advanced 2FA</td>
                            <td className="cross comparison-column"></td>
                            <td className="check comparison-column"></td>
                        </tr>
                        <tr>
                            <td>Sensitive Data Encryption</td>
                            <td className="check comparison-column"></td>
                            <td className="check comparison-column"></td>
                        </tr>
                        <tr>
                            <td>Attach Images</td>
                            <td className="check comparison-column"></td>
                            <td className="check comparison-column"></td>
                        </tr>
                        <tr>
                            <td>Login Brute force protection</td>
                            <td className="cross comparison-column"></td>
                            <td className="check comparison-column"></td>
                        </tr>

                        <tr>
                            <td>Offline Mode</td>
                            <td className="check comparison-column"></td>
                            <td className="check comparison-column"></td>
                        </tr>
                        <tr>
                            <td>Biometric Unlock</td>
                            <td className="cross comparison-column"></td>
                            <td className="check comparison-column"></td>
                        </tr>
                        <tr>
                            <td>Community Support</td>
                            <td className="cross comparison-column"></td>
                            <td className="check comparison-column"></td>
                        </tr>
                        <tr>
                            <td>Email Support</td>
                            <td className="comparison-column">Slower</td>
                            <td className="check comparison-column"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default VersionComparePage;