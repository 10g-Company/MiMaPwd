import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import { GOOGLE_PLAY_LINK } from '../../constants'

import cloud_off_outline from '../../assets/images/cloud-off-outline.svg';
import SmartphoneFrame from '../../components/SmartphoneFrame/SmartphoneFrame';
import intro_homepage from '../../assets/images/intro-homepage.jpg';
import intro_biometric from '../../assets/images/intro-biometric.jpg';
import intro_record from '../../assets/images/intro-record.jpg';
import intro_backup from '../../assets/images/intro-backup.jpg';
import intro_autobackup from '../../assets/images/intro-autobackup.jpg';
import intro_autolock from '../../assets/images/intro-autolock.jpg';
import intro_selfdestruct from '../../assets/images/intro-selfdestruct.jpg';
import intro_images from '../../assets/images/intro-images.jpg';
import intro_record_types from '../../assets/images/intro-recordTypes.jpg';

function HomePage() {
    useEffect(() => {
        document.title = "MiMaPwd";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <section className="section feature-section" id="intro">
                <div className="feature-phone">
                    <SmartphoneFrame media={intro_homepage} />
                </div>
                <div className="feature-content">
                    <h1>Simplify Your Digital Life</h1>
                    <p>
                        <b>MiMaPwd</b> is a secure, privacy-first password manager that keeps all your credentials safe ONLY on Your Device.
                    </p>
                    <br/>
                    <a href={GOOGLE_PLAY_LINK} target="_blank" className="cta-button">Get it on Google Play</a>
                </div>
            </section>
            
            <section className="section altcolor" id="intro2">
                <h1>Why Choose MiMaPwd ?</h1>
                <ul className="check-list">
                    <li>In a world of data breaches and cloud leaks, true security means keeping your secrets to yourself.</li>
                    <li><b>MiMaPwd</b> stores everything only on you device, encrypted with military-grade algorithms.</li>
                    <li>No clouds, No servers, No leaks. Just peace of mind.</li>
                    <li>No monthly subscription fee. Just a one-time purchase - Simple. Affordable. No hidden costs.</li>
                </ul>
                <br/><br/>
                <a href={GOOGLE_PLAY_LINK} target="_blank" className="cta-button">Get it on Google Play</a>
            </section>

            <section className="feature-section altcolor" id="features">
                <div className="feature-image">
                    <img src={cloud_off_outline} alt="Feature 1 Screenshot" />
                </div>
                <div className="feature-content">
                    <h2>🔐 Your Data Never Leaves Your Device</h2>
                    <ul className="check-list">
                        <li>In a world of data breaches, your privacy is paramount.</li>
                        <li>
                            Unlike other password managers that sync to the cloud, <b>MiMaPwd</b> stores everything exclusively on your device.
                        </li>
                        <li>
                            We have no servers, which means we can't see, share, or lose your data.
                            Your digital life remains completely private, just as it should be.
                        </li>
                    </ul>
                </div>

            </section>

            <section className="feature-section altcolor">
                <div className="feature-phone">
                    <SmartphoneFrame media={intro_record} />
                </div>

                <div className="feature-content">
                    <h2>🛡️ Military-Grade, Multi-Layered Security</h2>
                    <ul className="check-list">
                        <li>Your entire vault is stored in a 256-bit AES encrypted database.</li>
                        <li>
                            Sensitive data like passwords and images are further encrypted individually for an extra layer of protection.
                            It's like putting a safe inside a safe.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="feature-section altcolor">
                <div className="feature-phone">
                    <SmartphoneFrame media={intro_biometric} />
                </div>
                <div className="feature-content">
                    <h2>👆 Biometric Login</h2>
                    <p>
                        Access your password vault instantly and securely with your fingerprint or face ID. No more tedious typing.
                    </p>
                </div>
            </section>

            <section className="feature-section altcolor">
                <div className="feature-phone">
                    <SmartphoneFrame media={intro_backup} />
                </div>
                <div className="feature-content">
                    <h2>💾 Backup & Restore with Protection</h2>
                    <ul className="check-list">
                        <li>Create secure backups of your data to restore later.</li>
                        <li>Move your data between devices without ever exposing it to the internet.</li>
                        <li>
                            Backups are password-protected, so even if stolen, they’re useless without your unique password to restore it.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="feature-section altcolor">
                <div className="feature-phone">
                    <SmartphoneFrame media={intro_autobackup} />
                </div>
                <div className="feature-content">
                    <h2>🔄 Auto Backup</h2>
                    <p>
                        Never worry about forgetting a backup. Every time you save or update a record, MiMaPwd automatically creates a
                        secure, password-protected backup in the background.
                    </p>
                    <ul className="check-list">
                        <li>Peace of mind: Always have a recent copy.</li>
                        <li>Security intact: Backups stay encrypted, protected by your master password.</li>
                    </ul>
                </div>
            </section>

            <section className="feature-section altcolor">
                <div className="feature-phone">
                    <SmartphoneFrame media={intro_autolock} />
                </div>
                <div className="feature-content">
                    <h2>⏳ Auto-Lock for Safety</h2>
                    <p>
                        Stay secure even when idle. Choose an auto-lock timer, and <b>MiMaPwd</b> will re-lock after inactivity.
                        You’ll always be protected when you step away.
                    </p>
                </div>
            </section>

            <section className="feature-section altcolor">
                <div className="feature-phone">
                    <SmartphoneFrame media={intro_selfdestruct} />
                </div>
                <div className="feature-content">
                    <h2>💣 Self-Destruct Option</h2>
                    <ul className="check-list">
                        <li>Worried about brute force attacks?</li>
                        <li>Worried about someone forcing you to open your vault?</li>
                        <li>Set the number of wrong password attempts before the app wipes all your data automatically.</li>
                    </ul>
                </div>
            </section>

            <section className="feature-section altcolor">
                <div className="feature-phone">
                    <SmartphoneFrame media={intro_images} />
                </div>
                <div className="feature-content">
                    <h2>🖼️ More Than Text</h2>
                    <p>
                        Store not only usernames and passwords but also encrypted images in your records—perfect for secure storage of
                        ID cards, recovery codes, QR codes, or other sensitive visuals.
                    </p>
                </div>
            </section>

            <section className="feature-section altcolor">
                <div className="feature-phone">
                    <SmartphoneFrame media={intro_record_types} />
                </div>
                <div className="feature-content">
                    <h2>🗂️ Organized Record Types</h2>
                    <p>
                        With built-in record types, you can easily store and manage your data the way it’s meant to be.
                        <br /><br/>
                        <u>Available types include:</u><br />
                    </p>
                    
                    <ul className="bullet-list " style={{ display: 'inline-flex' }}>
                        <li>Bank Account</li>
                        <li>Credit Card</li>
                        <li>Email</li>
                        <li>Passport</li>
                        <li>Web Login</li>
                        <li>... and many more</li>
                    </ul>

                    <br /><br/>

                    <p>
                        Each type comes with predefined fields so you can quickly enter and retrieve the information you need without hassle.
                    </p>
                </div>
            </section>

            <section className="section altcolor">
                <h1>Ready to Take Full Control of Your Security ?</h1>
                <ul className="check-list">
                    <li>Don't trust your most sensitive data to someone else's server or cloud.</li>
                    <li>Download <b>MiMaPwd</b> today and experience the freedom of a truly private password manager.</li>
                    <li>One time upgrade to <b>Pro</b> version to unleash the full power of MiMaPwd.</li>
                    <li>
                        Simple. Affordable. No hidden costs. {' '}
                        <span style={{ fontSize: "0.9rem" }}>(see <Link to="/version-compare">Version Comparison</Link>)</span>
                    </li>
                </ul>
                <br />
                <br/>
                <a href={GOOGLE_PLAY_LINK} target="_blank" className="cta-button">Get it on Google Play</a>
            </section>
            
            <section className="section altcolor" id="help">
                <div>
                    <h2>Get Started</h2>
                    <p>Visit our <Link to="/tutorial">tutorial</Link> to learn how to use the app</p>
                </div>
                
                <div>
                    <h2>FAQ</h2>
                    <p>Check out some <Link to="/faq">frequently asked questions</Link>.</p>
                </div>

                <div>
                    <h2>Need Help?</h2>
                    <p>
                        If you have any questions or are running into issues or want to request new features,
                        please visit our <a href="https://github.com/10g-Company/MiMaPwd/issues" target="_blank">forum</a>
                    </p>
                </div>

                <div>
                    <h2>Contact Us?</h2>
                    <p>
                        You can contact us via the app. In the app, go to [Settings] {">"} [Contact Us]
                    </p>
                </div>
                
            </section>
        </>
    )
}

export default HomePage
