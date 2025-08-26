import { useEffect } from 'react';
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
                <p>A secure and easy-to-use password manager that keeps all your credentials safe ONLY on Your Device.</p>
                <a href="https://play.google.com/store/apps/details?id=your.app.package.name" target="_blank" className="cta-button">Get it on Google Play</a>
            </section>

            <section className="feature-section" id="features">
                <div className="feature-image">
                    <img src={cloud_off_outline} alt="Feature 1 Screenshot" />
                </div>
                <div className="feature-content">
                    <h2>Your Passwords, Only on Your Device - Never Online!</h2>
                    <p>
                        Keep your passwords 100% offline & ultra-secure with <b>MiMaPwd</b>!<br />
                        No cloud storage, no servers - just military-grade encryption on your device. <br/>
                        Access logins fast, generate strong passwords, and enjoy zero online risks. Total privacy. Total control.
                    </p>
                </div>
            </section>

            <section className="feature-section">
                <div className="feature-phone">
                    <SmartphoneFrame media={screenshot1} height="500px" />
                </div>

                <div className="feature-content">
                    <h2>Secure and Encrypted Vault</h2>
                    <p>Keep your passwords, credit card information, and other sensitive data protected with industry-leading encryption. Your data is only accessible to you.</p>
                </div>
            </section>

            <section className="feature-section">
                <div className="feature-image">
                    <img src="https://via.placeholder.com/400x800" alt="Feature 2 Screenshot" />
                </div>
                <div className="feature-content">
                    <h2>Autofill and Login with a Tap</h2>
                    <p>Tired of typing in your passwords? Our app securely fills in your login credentials across all your apps and websites, saving you time and frustration.</p>
                </div>
            </section>

            <section className="feature-section">
                <div className="feature-image">
                    <img src="https://via.placeholder.com/400x800" alt="Feature 3 Screenshot" />
                </div>
                <div className="feature-content">
                    <h2>Seamless Sync Across Devices</h2>
                    <p>Access your passwords from any device, anywhere. Your vault is automatically synced and updated in real-time, ensuring you always have the right information at hand.</p>
                </div>
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
