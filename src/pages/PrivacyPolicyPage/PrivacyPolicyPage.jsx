import { useEffect } from 'react';
import './PrivacyPolicyPage.css';
import { FcKey } from "react-icons/fc";

function PrivacyPolicyPage() {
    useEffect(() => {
        document.title = "Privacy Policy";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <h1 className="page-title">MiMaPwd Privacy Policy</h1>


            <div className="page-body">
                <p><strong>Last Updated (UTC): </strong> August 30, 2025</p>
                <br/>
                <p>
                    Welcome! This Privacy Policy explains how the MiMaPwd app ("we," "our," or "the app") handles your information.
                    Our most important principle is your privacy and security. Therefore, we designed MiMaPwd to keep your data
                    exclusively on your device.
                </p>
                <br/>
                <h3><FcKey className="react-icons" /> Key Summary</h3>
                <ul className="bullet-list identlvl1">
                    <li><strong>No Cloud Storage: </strong>All your passwords and data are stored only on your device in a heavily
                        encrypted database. Nothing is sent to our servers or the cloud</li>

                    <li><strong>We Collect Nothing: </strong>We do not collect, see, store, or process your passwords, sensitive data, or any
                        personal information.</li>

                    <li><strong>Total Control: </strong>You are in complete control of your data. We provide tools for encrypted backup
                        and restore, but the security of those files is your responsibility.</li>
                </ul>
                <br/>
                <p>By using MiMaPwd, you agree to the terms of this Privacy Policy.</p>

                <br />
                <hr />
                <br />

                <ol className="number-list h3-text" style={{ gap: '2em', marginLeft:'-10px'}}>
                    <li>
                        What Information Do We Collect?
                        <div className="h3-content">
                            The short answer: <b>We do not collect your personal information or saved data.</b>
                            <ul className="bullet-list">
                                <li>
                                    <b>Personal Data: </b>We <b>do not</b> collect any personal information such as your name, email, or phone number.
                                </li>
                                <li>
                                    <b>Usage Data: </b>We <b>do not</b> monitor your usage or track your behavior.
                                </li>
                                <li>
                                    <b>Stored Data: </b> We <b>do not</b> collect your stored data. All passwords, notes, and images are encrypted
                                    and stored locally in a database on your device.
                                </li>
                                <li>
                                    <b>Technical Information (Anonymous): </b>To help us improve the app's stability and performance,
                                    the Google Play Store may provide us with aggregated, anonymous information such as the type of device
                                    you use, your OS version, and crash reports. This data <b>cannot</b> be used to identify you personally.
                                </li>
                                <li>
                                    <b>Purchase Information (For MiMaPwd Pro Upgrade): </b>If you choose to upgrade to MiMaPwd Pro, the
                                    transaction is handled entirely by the Google Play Store. We <b>do not</b> see, receive, or store your
                                    payment details (e.g. your credit card number). We only receive a confirmation from Google that your
                                    purchase was successful, which is necessary to activate your Pro features.
                                </li>
                            </ul>
                        </div>
                        
                    </li>

                    <li>
                        How Do We Use Your Information?
                        <div className="h3-content">
                            Since we do not collect your data, we have nothing to use. Any data you enter into the app is used solely for the
                            app's functionality on your device, such as auto-filling login forms at your direction.
                        </div>
                    </li>

                    <li>
                        How Do We Store and Protect Your Information?
                        <div className="h3-content">
                            Your data's security is our top priority. We use robust encryption standards to protect your information on your
                            device:
                            <ul className="bullet-list">
                                <li>
                                    <b>Local Encryption: </b>Your entire database is encrypted by AES-256 encryption, a military-grade standard.
                                </li>
                                <li>
                                    <b>Master Password: </b>Your data is encrypted with a key derived from your master password. We never store
                                    this password; it only exists on your device to unlock your database.
                                </li>
                                <li>
                                    <b>Biometric Data: </b>If you enable biometric login (fingerprint/face ID), the authentication process is
                                    handled securely by your device's operating system. We do not receive, process, or store your biometric data.
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        Data Sharing and Disclosure
                        <div className="h3-content">
                            <b>We do not share, sell, or disclose any user data because we do not have any to share.</b> Your data remains
                            on your device, under your control.
                        </div>
                    </li>

                    <li>
                        Your Data Rights
                        <div className="h3-content">
                            Because your data is yours alone on your device, you have full control. You can:
                            <ul className="bullet-list">
                                <li><b>Access, Edit, and Delete</b> all your data directly within the app.</li>
                                <li><b>Export Your Data</b> by creating an encrypted backup file.</li>
                                <li>
                                    <b>Delete Everything</b> by uninstalling the app, or using the "Self-Destruct", "Delete-Vault" or
                                    "Wipe all data" feature. Please note, this erases all data permanently and cannot be undone.
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        Third-Party Services
                        <div className="h3-content">
                            <ul className="bullet-list">
                                <li>
                                    MiMaPwd <b>does not</b> integrate with any third-party services (like analytics or advertising) that
                                    would require sharing your data. The app is designed to function independently.
                                </li>
                                <li>
                                    MiMaPwd uses Google Play Services for app distribution and to process in-app purchases. Google has
                                    its own Privacy Policy, and we encourage you to review it. We <b>do not</b> share any of your personal vault
                                    data with any third parties as we <b>do not</b> collect your personal data.
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        What Happens If I Lose My Device? or Forget My Password?
                        <div className="h3-content">
                            <ul className="bullet-list">
                                <li>Since we never collect your data, we cannot recover it for you.</li>
                                <li>Without your master password (or biometrics, if enabled), no one can access your data.</li>
                                <li>If you created a backup, you can restore it on a new device.</li>
                            </ul>
                        </div>
                        
                    </li>

                    <li>
                        Children's Privacy
                        <div className="h3-content">
                            Our app is not intended for children under the age of 13. We do not knowingly collect personal information
                            from children under 13.
                        </div>
                    </li>

                    <li>
                        Changes to This Privacy Policy
                        <div className="h3-content">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy
                            Policy on this page and updating the "Last Updated" date. You are advised to review this policy periodically for
                            any changes.
                        </div>
                        
                    </li>

                    <li>
                        Contact Us
                        <div className="h3-content">
                            If you have any questions or suggestions about this Privacy Policy, please contact us at:<br />
                            <a href="mailto:mimapwd-privacy@10g.co" target="_blank" rel="noreferrer">mimapwd-privacy@10g.co</a>
                        </div>
                        
                    </li>
                </ol>
                
            </div>
        </>
    );
}

export default PrivacyPolicyPage;