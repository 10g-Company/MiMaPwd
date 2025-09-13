import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Warning from "../../../../components/Warning/Warning";
import Note from "../../../../components/Note/Note";
import ArticleToc from "../../../../components/ArticleToc/ArticleToc";

import general_default_folder from "../../../../assets/images/general-default_folder.png";
import setting_others_upgradepro from "../../../../assets/images/setting-others-upgradepro.png";
import setting_others_defaultfolder from "../../../../assets/images/setting-others-defaultfolder.png";
import setting_others_support from "../../../../assets/images/setting-others-support.png";

function GeneralSetting() {

    const toc = [
        { topic: "Upgrade to Pro", id: "upgrade" },
        { topic: "Default Data Folder", id: "defaultfolder" },
        { topic: "Support", id: "support" },
    ];

    useEffect(() => {
        document.title = "General Setting";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <h1>Other Setting</h1>

            <ArticleToc topics={toc} />

            <section id="upgrade">
                <h3>Upgrade to Pro</h3>
                <img className="no-border" src={setting_others_upgradepro} alt="Upgrade to Pro Setting" />
                <p>Click [Upgrade to Pro] to go to the purchase page.</p>
            </section>

            <section id="defaultfolder">
                <h3>Default Data Folder</h3>
                <img className="no-border" src={setting_others_defaultfolder} alt="Default Data Folder Setting" />
                <p>Select a folder to save your manual and auto backup files</p>
                <ol className="number-list">
                    <li>
                        It will prompt you the [Folder Picker] dialog. Navigate to the desired folder and and click [Use this folder]
                        <img src={general_default_folder} alt="Default Data Folder" />    
                    </li>
                </ol>
                <Note>
                    <ol className="number-list">
                        <li>
                            The [Folder Picker] interface may vary depending on your device
                        </li>
                        <li>
                            On most device, you can create a new folder in the [Folder Picker] dialog
                        </li>
                        <li>
                            If you don't have the option to create a new folder, you can create a new folder using your device's
                            file manager app, then select that folder in the [Folder Picker] dialog
                        </li>
                    </ol>
                    
                </Note>
            </section>

            <section id="support">
                <h3>Support</h3>
                <img className="no-border" src={setting_others_support} alt="Support Setting" />
                <ol className="number-list">
                    <li>
                        Click [Help] to go to the online help page.
                    </li>
                    <li>
                        Click [Report Issue] to go to the issue tracker or request feature page.
                    </li>
                    <li>
                        Click [Contact Support] to send an email to the support team.
                    </li>
                </ol>
            </section>
        </>
    );
}

export default GeneralSetting;