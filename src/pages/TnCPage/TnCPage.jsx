import { useEffect } from 'react';
import './TnCPage.css';
import { FcKey } from "react-icons/fc";

function TnCPage() {
    useEffect(() => {
        document.title = "Terms & Conditions";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <h1 className="page-title">MiMaPwd Terms & Conditions</h1>

            <div className="content">
                <p>
                    <strong>Effective Date (UTC): </strong> August 30, 2025
                </p>
                <br />
                
                <ol className="bullet-list">
                    <li>
                        <h3>Introduction</h3>
                        MiMaPwd is a password manager Android app provided by 10g Company Pte. Ltd. (“we”, “us” or “our”) based in
                        Singapore. By installing, accessing, or using MiMaPwd (the “App”), you agree to these Terms & Conditions
                        (the “Terms”) and any future updates. If you do not agree to any part of these Terms, please discontinue use of
                        the App. These Terms are governed by and interpreted under the laws of the Republic of Singapore
                    </li>

                    <li>
                        <h3>User Responsibilities and Security</h3>
                        Due to the offline, zero-knowledge security architecture of MiMaPwd, you acknowledge and agree that you are
                        solely and entirely responsible for the management and security of your data.
                        <ul className="bullet-list">
                            <li>
                                <b>Master Password: </b>You are solely responsible for remembering your Master Password.
                                <b>WE DO NOT HAVE ACCESS TO YOUR MASTER PASSWORD AND CANNOT RECOVER IT FOR YOU.</b> If you lose, forget,
                                or misplace your Master Password, your data stored within MiMaPwd will be permanently and irretrievably lost.
                            </li>
                            <li>
                                <b>Data Backup: </b>You are solely responsible for creating and securely storing backup files of your
                                MiMaPwd data. The backup and restore feature is the only method for data recovery in the event your device
                                is lost, stolen, damaged, or reset. We are not responsible for any loss of data resulting from your
                                failure to maintain a secure and recent backup.
                            </li>
                            <li>
                                <b>Device Security: </b>You are responsible for maintaining the security of the physical device on which
                                MiMaPwd is installed. You should also secure your mobile device with a lock screen
                                (PIN, pattern, biometric, etc.) and avoid jailbreaking or rooting it, as this may compromise security.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>License and Use</h3>
                        We grant you a limited, non-exclusive, non-transferable license to download, install, and use the App on a single
                        personal mobile device. This license is for your personal, non-commercial use only. All rights, title and
                        interest in the App and its content (including intellectual property rights) remain with us and our licensors.
                        You may not:
                        <ul className="bullet-list">
                            <li>Copy, modify, translate, or create derivative works of the App.</li>
                            <li>Reverse-engineer, decompile, disassemble, or attempt to extract the source code of the App.</li>
                            <li>Distribute, sell, sublicense, or transfer the App or your license to any third party</li>
                            <li>Use the App to engage in illegal activities or infringe any laws or third-party rights.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Eligibility</h3>
                        <ul className="bullet-list">
                            <li>
                                You must be at least 13 years old to use MiMaPwd. By using the App, you represent and warrant that you
                                are at least 13 years of age. If you are between 13 and 18 years old, you may only use the App under the
                                supervision of a parent or guardian who agrees to be bound by these Terms on your behalf.
                            </li>
                            <li>
                                If you are using the App on behalf of an entity, organization, or company, you represent and warrant that you
                                have the authority to bind that organization to these Terms.
                            </li>
                        </ul>
                        
                    </li>

                    <li>
                        <h3>In-App Purchases and Payment (Pro Version)</h3>
                        <ul className="bullet-list">
                            <li>The App is offered in a free version with certain limitations (for example, a limited number of entries).</li>
                            <li>
                                A one-time purchase payment ("Pro Version") is available to unlock unlimited records and additional functionality.
                                All financial transactions for the Pro Version are processed solely by Google Play. You agree to abide by
                                Google Play's Terms of Service for all in-app purchases.
                            </li>
                            <li>
                                We do not process, store, or have access to any of your payment information. All payment data is collected
                                and processed by Google.
                            </li>
                            <li>
                                All purchases are final and non-refundable, except as required by applicable law or the policies of the
                                Google Play Store.
                            </li>
                            <li>
                                Google Play may allow a refund within a short time after purchase. After this period, refunds are at Google’s
                                or our discretion in accordance with the law. If you believe you were charged in error or have an issue with
                                the purchase, please contact Google Play Support or us.
                                <b>We do not provide refunds directly through the App.</b>
                            </li>
                            <li>
                                If you purchase Pro through your Google account, you can reinstall it on that account and device without
                                repurchasing. The license is tied to your Google account and cannot be transferred to another account.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Data Storage and Data Loss</h3>
                        All passwords and other data entered into MiMaPwd are stored locally on your device in encrypted form.
                        We do not upload or store your password data on our servers. If you delete the App or lose your device without a
                        backup, your data will be permanently lost and cannot be recovered. Please use any backup/export features provided to
                        safeguard your data. We are not responsible for any loss of data due to device failure, theft, or user error.
                    </li>

                    <li>
                        <h3>Disclaimers of Warranties</h3>
                        The App is provided on an “as is” and “as available” basis. We make no warranties, express or implied, about the
                        App’s reliability, performance or fitness for a particular purpose. We do not guarantee that the App is
                        error-free or uninterrupted.
                    </li>

                    <li>
                        <h3>Limitation of Liability</h3>
                        TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, 10G COMPANY PTE. LTD. SHALL NOT BE LIABLE FOR ANY INDIRECT,
                        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA,
                        OR OTHER INTANGIBLE LOSSES, RESULTING FROM:

                        <ul className="bullet-list">
                            <li>YOUR INABILITY TO ACCESS OR USE THE APP;</li>
                            <li>ANY DATA LOSS WHATSOEVER, INCLUDING LOSS DUE TO A FORGOTTEN MASTER PASSWORD OR FAILURE TO CREATE A BACKUP;</li>
                            <li>
                                ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH OUR SERVICE BY ANY
                                THIRD PARTY;
                            </li>
                            <li>
                                THE FAILURE OF THE SELF-DESTRUCT FEATURE OR ANY OTHER SECURITY FEATURE;
                            </li>
                            <li>
                                ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE INCURRED AS A RESULT OF THE USE OF ANY
                                CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE SERVICE.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Termination</h3>
                        <ul className="bullet-list">
                            <li>
                                You may terminate this agreement at any time by uninstalling the App. Uninstalling the App will delete all
                                locally stored Content (not including your manual backup).
                            </li>
                            <li>
                                We reserve the right to terminate or suspend your access to the App (e.g., remove it from Google Play) if you
                                violate these Terms.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Governing Law</h3>
                        These Terms shall be governed and construed in accordance with the laws of the Republic of Singapore, without regard
                        to its conflict of law provisions.
                    </li>

                    <li>
                        <h3>Updates to the App and Changes to Terms</h3>
                        <p>
                            We may update, modify, or discontinue the App (or any part of it) at any time without notice. It is recommended
                            that you install updates to ensure the App works correctly and securely. Your continued use of the App after
                            an update constitutes your acceptance of the updated App and any updated Terms.
                        </p>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide
                            notice of any changes by updating the "Effective Date" of these Terms. By continuing to access or use our
                            App after those revisions become effective, you agree to be bound by the revised terms.
                        </p>
                    </li>

                    <li>
                        <h3>Contact Us</h3>
                        If you have any questions about these Terms, please contact us at:<br/>
                        <a href="mailto:mimapwd-tnc@10g.co" target="_blank" rel="noreferrer">mimapwd-tnc@10g.co</a>
                    </li>
                </ol>

            </div>
        </>
    );
}

export default TnCPage;