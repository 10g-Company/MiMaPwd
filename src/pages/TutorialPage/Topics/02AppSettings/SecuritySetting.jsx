import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Warning from "../../../../components/Warning/Warning";
import Note from "../../../../components/Note/Note";
import ArticleToc from "../../../../components/ArticleToc/ArticleToc";

import setting_security from "../../../../assets/images/setting-security.png";
import setting_security_chgpwd from "../../../../assets/images/setting-security-chgpwd.png";
import setting_security_pwdreminder from "../../../../assets/images/setting-security_pwdreminder.png";
import setting_security_autolock from "../../../../assets/images/setting-security-autolock.png";
import setting_security_selfdestruct from "../../../../assets/images/setting-security-selfdestruct.png";
import setting_security_button_selfdestruct from "../../../../assets/images/setting-security-button-selfdestruct.png";
import setting_security_button_autolock from "../../../../assets/images/setting-security-button-autolock.png";
import setting_security_button_biometric from "../../../../assets/images/setting-security-button-biometric.png";
import setting_security_button_chgpwd from "../../../../assets/images/setting-security-button-chgpwd.png";
import setting_security_button_reminder from "../../../../assets/images/setting-security-button-reminder.png";

function SecuritySetting() {

    const toc = [
        { topic: "Change Master Password", id: "chgpwd" },
        { topic: "Biometric", id: "biometric" },
        { topic: "Master Password Reminder", id: "pwdreminder" },
        { topic: "App Auto-Lock", id: "autolock" },
        { topic: "Self-Destruct Attempts", id: "selfdestruct" },
    ];

    useEffect(() => {
        document.title = "Security Setting";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <h1>Security Setting</h1>

            <ArticleToc topics={toc} />

            <section id="chgpwd">
                <h3>Change Master Password</h3>
                <img className="no-border" src={setting_security_button_chgpwd} alt="Change Pwd button" />
                <ol className="number-list">
                    <li>
                        Enter your current password, then enter your new password twice to confirm. Click on [Submit] to proceed.
                        <img src={setting_security_chgpwd} alt="Change Master Password" />
                        <Note>
                            After changing the password, be sure to create a new backup file to ensure your data is securely backed up with
                            the new password.
                        </Note>
                    </li>
                </ol>
                <Note id="pwdrequirement">
                    <h4>Password Requirement:</h4>
                    <ol className="alpha-list">
                        <li>At least 6 characters</li>
                        <li>Contains at least 1 number</li>
                    </ol>
                    <br/>
                    <h4>Recommendation:</h4>
                    <ol className="alpha-list">
                        <li>12 characters or longer</li>
                        <li>Contains a mix of uppercase letters, lowercase letters, numbers, and symbol</li>
                    </ol>
                </Note>
                
            </section>

            <section id="biometric">
                <h3>Biometric</h3>
                <img className="no-border" src={setting_security_button_biometric} alt="Biometric button" />
                <p>
                    Enable/Disable biometric authentication (fingerprint or face recognition) to unlock the app. When this is enabled,
                    you will use your biometric to login instead of password.
                </p>
                <Note>
                    Biometric authentication is only available if your device supports it and you have set it up in your device settings.
                </Note>
            </section>

            <section id="pwdreminder">
                <h3>Master Password Reminder (only when Biometric is enabled)</h3>
                <img className="no-border" src={setting_security_button_reminder} alt="Pwd Reminder button" />
                <p>
                    When you turned on biometric authentication, it's recommended to set a password reminder to help you remember your
                    master password. You can select a periodic interval to prompt you the password login instead of biometric.
                </p>
                <img src={setting_security_pwdreminder} alt="Master Password Reminder" />
            </section>

            <section id="autolock">
                <h3>App Auto-Lock</h3>
                <img className="no-border" src={setting_security_button_autolock} alt="Auto Lock button" />
                <p>
                    Set the duration of inactivity before the app automatically locks itself. Example, when you turn off the screen or send the
                    app to the background, the app will automatically lock after the specified time interval.
                </p>
                <img src={setting_security_autolock} alt="App Auto-Lock" />
            </section>

            <section id="selfdestruct">
                <h3>Self-Destruct Attempts</h3>
                <img className="no-border" src={setting_security_button_selfdestruct} alt="Self Destruct button" />
                <p>
                    Set the number of consecutive failed login attempts before the app automatically deletes all your data. This is a security
                    feature to protect your data in case your device is lost or stolen.
                </p>
                <img src={setting_security_selfdestruct} alt="Self-Destruct Attempts" />
                <Warning>
                    This action cannot be undone. All your data will be permanently deleted after the specified number of failed login attempts. 
                    <br/>
                    Always ensure you remember your master password or have a reliable backup of your data.
                </Warning>
            </section>
        </>
    );
}

export default SecuritySetting;