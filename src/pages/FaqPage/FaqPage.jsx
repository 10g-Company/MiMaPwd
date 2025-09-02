import { useEffect } from 'react';
import './FaqPage.css';
import FaqItem from '../../components/FaqItem/FaqItem'
import { MdCloudOff } from "react-icons/md";
import { FaShieldHalved } from "react-icons/fa6";
import { FcKey, FcLock } from "react-icons/fc";
import { FaHandPointUp } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";

function FaqPagePage() {
    useEffect(() => {
        document.title = "FAQ";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <h1 className="page-title">Frequently Asked Questions</h1>

            <section className="category">
                <h2>Security & Privacy</h2>

                <FaqItem question="Is MiaMaPwd hack-proof? Can you guarantee my data will never be stolen?">
                    <p>
                        While no system can ever be called 100% "hack-proof", MiMaPwd is designed with the strongest security principles
                        to be as resilient as possible. It's architecture is designed to be fundamentally more secure than the others
                        clould-based password managers. Because your data is stored offline, it cannot be compromised by a
                        remote server breach. The strongest guarantee we provide is that your data never leaves your device,
                        drastically reducing any potential attack surface. Your safety depends on you choosing a strong master
                        password and keeping your device secure.
                    </p>
                </FaqItem>

                <FaqItem question="Is my data really only stored on my device? Is there any processing on your servers?">
                    <p>
                        Yes, data is 100% stored on your device. And No, there is no processing on any servers.
                        <br/>
                        We have a strict zero-knowledge and zero-server policy regarding your personal data.
                        The app operates completely offline. We do not perform any pre- or post-processing of your data on any servers.
                        We cannot see, access, or decrypt your information. Your privacy is absolute. The only network permission
                        the app might use is for in-app purchases & verification (to upgrade to Pro) and viewing online help.
                    </p>
                </FaqItem>

                <FaqItem question="What happens if I forget my master password?">
                    <p>
                        Because of our zero-knowledge security model, we cannot recover or bypass your master password.
                        There is no "Forgot Password" link. This is a deliberate security feature to ensure that no one but you can
                        ever access your vault. We strongly recommend you memorize your master password or store a written copy
                        in a physically secure location, like a home safe.
                    </p>
                </FaqItem>

                <FaqItem question="What if someone steals my phone?">
                    <p>
                        Without your master password or biometric login, the database is useless. If the thief tries too many wrong
                        passwords and you’ve enabled the self-destruct feature, your vault will erase itself.
                    </p>
                </FaqItem>

                <FaqItem question="What happens if I lose my phone?">
                    <p>
                        Since all data is stored locally and encrypted, nobody can access your passwords without your master password
                        or biometric login. If you have created a backup, you can restore your data to a new device.
                    </p>
                </FaqItem>
            </section>

            <section className="category">
                <h2>Features & Usage</h2>

                <FaqItem question="Is MiMaPwd free to use?">
                    <p>
                        Yes! MiMaPwd offers a free version that allows you to store up to 25 records. If you need more, you can
                        upgrade to the paid version for unlimited storage and full features.
                    </p>
                </FaqItem>

                <FaqItem question="Is MiMaPwd Pro a subscription?">
                    <p>
                        No. We believe in a transparent and fair pricing model. MiMaPwd Pro is a one-time purchase that grants you
                        lifetime access to all the pro features. No monthly or yearly fees.
                    </p>
                </FaqItem>

                <FaqItem question="Can I use MiMaPwd on multiple devices?">
                    <p>
                        Yes, but since MiMaPwd does not rely on cloud sync (for your security), you'll need to use the secure
                        Backup & Restore feature, and manually transfer backups between devices when needed.
                    </p>
                </FaqItem>

                <FaqItem question="Can I access my passwords on my computer or other devices?">
                    <p>
                        No. MiMaPwd is designed as a local, on-device manager for Android. It does not sync across devices.
                        While you can use the app on multiple devices, your passwords are only accessible on the device where the app is
                        installed and the database exists. This is a conscious design choice for maximum privacy.
                    </p>
                </FaqItem>

                <FaqItem question="Can I import passwords from another password manager or my browser?">
                    <p>
                        The current version of MiMaPwd focuses on manual entry for maximum security and control. We are exploring
                        secure import/export options for common formats (like CSV) for future updates.
                    </p>
                </FaqItem>

                <FaqItem question="What is the 'Self-Destruct' feature?">
                    <p>
                        This is a security feature designed to protect your data if your device is lost or stolen and someone tries to
                        force their way into the app. You can set a limit for incorrect password attempts (e.g., 10 tries).
                        If someone exceeds this limit, the app will automatically and irrevocably delete all your stored records and
                        the encrypted database. This is a last-line-of-defense feature and should be enabled with understanding.
                    </p>
                </FaqItem>

                <FaqItem question="What is the 'Auto-Lock' feature?">
                    <p>
                        This feature automatically secures your vault after a period of inactivity that you define. You can set it to 'immediate' or
                        after certain minutes. When the app is sent to the background or screen is off, you will be prompted to re-login after your 
                        selected minutes. This ensure your passwords are safe even when you're away.
                    </p>
                </FaqItem>

                <FaqItem question="How does the 'Backup & Restore' feature work?">
                    <p>
                        The app allows you to export your entire encrypted vault into a single backup file. This file is also protected
                        by your master password. You can then save this file anywhere you like. To restore, you simply import this file
                        into MiMaPwd on a new device and enter your master password to decrypt it. Even if someone steals the
                        backup file, they cannot restore it without your password.
                    </p>
                </FaqItem>

                <FaqItem question="Can I store images and sensitive files too?">
                    <p>
                        Yes! MiMaPwd supports storing images (like ID cards, recovery codes, or notes), and just like passwords,
                        they’re further encrypted before being saved.
                    </p>
                </FaqItem>

                <FaqItem question="Will MiMaPwd ever add cloud sync?">
                    <p>
                        Security is our #1 priority, so cloud sync is intentionally not supported. However, we may explore user-controlled
                        sync options (like encrypted Google Drive backup) in the future—but only if it meets our strict privacy standards.
                    </p>
                </FaqItem>
            </section>

            <section className="category">
                <h2>Technical</h2>

                <FaqItem question="What encryption standards does MiMaPwd use?">
                    <p>MiMaPwd employs:</p>
                    <ul className="shield-list identlvl1">
                        <li>AES-256 encryption for the entire database</li>
                        <li>PBKDF2 with high number of iterations to derive keys</li>
                        <li>HMAC-SHA512 for integrity checks</li>
                        <li>Extra layer of encryption for sensitive fields (password and images) within each record</li>
                    </ul>
                </FaqItem>

                <FaqItem question="Why does the app need permission to access my device's fingerprint or face ID?">
                    <p>
                        This permission is used solely for the biometric login feature. Your fingerprint or face data is never
                        stored by MiMaPwd; it is handled securely by your device's operating system. The app simply receives
                        a "yes" or "no" from the system on whether authentication was successful.
                    </p>
                </FaqItem>

                <FaqItem question="Why does the app need Internet permission?">
                    <p>
                        This permission is used solely for In-App purchase & verification (to upgrade to Pro version). In addition, 
                        to view any online help or to raise issue. If you don't need those, you can disable/remove the Internet permission.
                    </p>
                </FaqItem>

                <FaqItem question="Why does the app need Camera permission?">
                    <p>
                        This permission is needed if you want add images or icon to your record using your camera. If you don't need those, 
                        you can disable/remove the Camera permission.
                    </p>
                </FaqItem>

                <FaqItem question="Why does the app need Files and media permission?">
                    <p>
                        This permission is needed if you want to use an existing image as your record's icon, or add an existing image 
                        to your record.
                    </p>
                    <p>
                        In addition, this permission is required to store your backup file.
                    </p>
                </FaqItem>
            </section>

            <section className="category">
                <h2>Why Choose Us ?</h2>

                <FaqItem question="Why should I choose MiMaPwd over big-name password managers?">
                    
                    <p>
                        MiMaPwd is for users who prioritize ultimate privacy and data ownership. While many popular services offer convenience
                        through cloud syncing, this also creates a central target for hackers. Our key differentiators are:
                    </p>
                    <br />
                    <div className="identlvl1">
                        <p>
                            <MdCloudOff className="react-icons" color='red' />
                            No cloud = no leaks from hacks on third-party servers.
                        </p>
                        <br />
                        <p>
                            <FcKey className="react-icons" color='red' />
                            Strong encryption for both the database and sensitive fields.
                        </p>
                        <br />
                        <p>
                            <FcLock className="react-icons" color='red' />
                            Customizable security features like self-destruct and auto-lock.
                        </p>
                        <br />
                        <p>
                            <FaHandPointUp className="react-icons" color='orange' />
                            Simple, lightweight design without unnecessary trackers.
                        </p>
                        <br />
                        <p>
                            <HiCurrencyDollar className="react-icons" color='green' />
                            You prefer a one-time payment: No ongoing subscriptions. Pay once, own it forever.
                        </p>
                        <br/>
                    </div>
                    <p>
                        Big players often rely on the cloud, which introduces risks if their servers are compromised. MiMaPwd avoids this
                        risk entirely.
                    </p>
                </FaqItem>

                <FaqItem id="about-us" question="Who is behind MiMaPwd? Can I trust you?">
                    <p>
                        MiMaPwd is developed by <strong>10g Company Pte. Ltd.</strong> We are a Singapore-based company with a small team focusing on
                        building mobile app. Our trust is built on transparency and fair pricing model. Our app's functionality reflects
                        our privacy-first promises—no data collection, no cloud storage. You can trust the code and the design, not a
                        corporation's privacy policy.
                    </p>
                </FaqItem>

            </section>
        </>
    );
}

export default FaqPagePage;