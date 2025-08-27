import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import cloud_off_outline from '../../assets/images/cloud-off-outline.svg';
import SmartphoneFrame from '../../components/SmartphoneFrame/SmartphoneFrame';
import screenshot1 from '../../assets/images/dianhuo-home.png';

function HomePage() {
    useEffect(() => {
        document.title = "MiMaPwd";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <section className="section" id="intro">
                <h1>Simplify Your Digital Life</h1>
                <p>
                    <b>MiMaPwd</b> is a secure, privacy-first password manager that keeps all your credentials safe ONLY on Your Device.
                </p>
                <a href="https://play.google.com/store/apps/details?id=your.app.package.name" target="_blank" className="cta-button">Get it on Google Play</a>
            </section>
            
            <section className="section" id="intro2">
                <h1>Why Choose MiMaPwd ?</h1>
                <p>
                    <ul className="check-list">
                        <li>In a world of data breaches and cloud leaks, true security means keeping your secrets to yourself.</li>
                        <li><b>MiMaPwd</b> stores everything only on you device, encrypted with military-grade algorithms.</li>
                        <li>No clouds, No servers, No leaks. Just peace of mind.</li>
                    </ul>
                </p>
                <a href="https://play.google.com/store/apps/details?id=your.app.package.name" target="_blank" className="cta-button">Get it on Google Play</a>
            </section>

            <section className="feature-section" id="features">
                <div className="feature-image">
                    <img src={cloud_off_outline} alt="Feature 1 Screenshot" />
                </div>
                <div className="feature-content">
                    <h2>🔐 Your Data Never Leaves Your Device</h2>
                    <p>
                        In a world of data breaches, your privacy is paramount.
                    </p>
                    <p>
                        Unlike other password managers that sync to the cloud, <b>MiMaPwd</b> stores everything exclusively on your device.
                    </p>
                    <p>
                        We have no servers, which means we can't see, share, or lose your data.
                        Your digital life remains completely private, just as it should be.
                    </p>
                </div>

            </section>

            <section className="feature-section">
                <div className="feature-phone">
                    <SmartphoneFrame media={screenshot1} height="500px" />
                </div>

                <div className="feature-content">
                    <h2>🛡️ Military-Grade, Multi-Layered Security</h2>
                    <p>
                        Your entire vault is stored in a 256-bit AES encrypted database.
                    </p>
                    <p>
                        Sensitive data like passwords and images are further encrypted individually for an extra layer of protection. 
                        It's like putting a safe inside a safe.
                    </p>
                </div>
            </section>

            <section className="feature-section">
                <div className="feature-phone">
                    <SmartphoneFrame media={screenshot1} height="500px" />
                </div>
                <div className="feature-content">
                    <h2>👆 Biometric Login</h2>
                    <p>
                        Access your password vault instantly and securely with your fingerprint or face ID. No more tedious typing.
                    </p>
                </div>
            </section>

            <section className="feature-section">
                <div className="feature-phone">
                    <SmartphoneFrame media={screenshot1} height="500px" />
                </div>
                <div className="feature-content">
                    <h2>💾 Backup & Restore with Protection</h2>
                    <p>Create secure backups of your data to restore later.</p>
                    <p>Move your data between devices without ever exposing it to the internet.</p>
                    <p>
                        Backups are password-protected, so even if stolen, they’re useless without your unique password to restore it.
                    </p>
                </div>
            </section>

            <section className="feature-section">
                <div className="feature-phone">
                    <SmartphoneFrame media={screenshot1} height="500px" />
                </div>
                <div className="feature-content">
                    <h2>⏳ Auto-Lock for Safety</h2>
                    <p>
                        Stay secure even when idle. Choose an auto-lock timer, and <b>MiMaPwd</b> will re-lock after inactivity.
                        You’ll always be protected when you step away.
                    </p>
                </div>
            </section>

            <section className="feature-section">
                <div className="feature-phone">
                    <SmartphoneFrame media={screenshot1} height="500px" />
                </div>
                <div className="feature-content">
                    <h2>💣 Self-Destruct Option</h2>
                    <p>
                        Worried about brute force attacks? Worried about someone forcing you to open your vault?
                        Set the number of wrong password attempts before the app wipes all your data automatically.
                    </p>
                </div>
            </section>

            <section className="feature-section">
                <div className="feature-phone">
                    <SmartphoneFrame media={screenshot1} height="500px" />
                </div>
                <div className="feature-content">
                    <h2>🖼️ More Than Text</h2>
                    <p>
                        Store not only usernames and passwords but also encrypted images in your records—perfect for secure storage of
                        ID cards, recovery codes, QR codes, or other sensitive visuals.
                    </p>
                </div>
            </section>

            <section className="section">
                <h1>Ready to Take Full Control of Your Security ?</h1>
                <p>
                    Don't trust your most sensitive data to someone else's server or cloud.<br /><br />
                    Download <b>MiMaPwd</b> today and experience the freedom of a truly private password manager.<br /><br />
                    One time upgrade to <b>Pro</b> version to unleash the full power of MiMaPwd.<br />
                    Simple. Affordable. No hidden costs.{' '}
                    <span style={{ fontSize: "0.9rem" }}>(see <Link to="/version-compare">Version Comparison</Link>)</span>
                </p>
                <a href="https://play.google.com/store/apps/details?id=your.app.package.name" target="_blank" className="cta-button">Get it on Google Play</a>
            </section>
            
            <section className="section" id="help">
                <h2>Get Started</h2>
                <p>Visit our <a href="tutorial/01getstarted.html">tutorial</a> to learn how to use the app</p>
                <br /><br />
                <h2>Need Help?</h2>
                <p>
                    If you have any questions or are running into issues or want to request new features,
                    please visit our <a href="https://github.com/10g-Company/MiMaPwd/issues" target="_blank">support page</a>
                </p>
                <br /><br />
                <h2>Contact Us?</h2>
                <p>
                    You can contact us via the app. In the app, go to [Settings] {"->"} [Report Issue]
                </p>
            </section>
        </>
    )
}

export default HomePage
