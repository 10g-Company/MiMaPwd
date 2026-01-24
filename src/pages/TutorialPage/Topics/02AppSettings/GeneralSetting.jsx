import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Warning from "../../../../components/Warning/Warning";
import Note from "../../../../components/Note/Note";
import ArticleToc from "../../../../components/ArticleToc/ArticleToc";

import general_default_folder from "../../../../assets/images/general-default_folder.png";
import general_theme from "../../../../assets/images/general-theme.png";
import general_theme_popup from "../../../../assets/images/general-theme_popup.png";
import setting_others_upgradepro from "../../../../assets/images/setting-others-upgradepro.png";
import setting_others_defaultfolder from "../../../../assets/images/setting-others-defaultfolder.png";
import setting_others_support from "../../../../assets/images/setting-others-support.png";

function GeneralSetting() {

    const toc = [
        { topic: "Theme", id: "changetheme" },
        { topic: "Default Data Folder", id: "defaultfolder" },
    ];

    useEffect(() => {
        document.title = "General Setting";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <h1>General Setting</h1>

            <ArticleToc topics={toc} />

            <section id="changetheme">
                <h3>Theme</h3>
                <img className="no-border" src={general_theme} alt="Change theme" />
                <p>Click to select the theme</p>
                <ol className="number-list">
                    <li>
                        It will prompt a popup where you can choose <b>Light</b> or <b>Dark</b> Theme
                        <img src={general_theme_popup} alt="Theme selection" />
                    </li>
                </ol>
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
                            The [Folder Picker] interface (as shown above) may vary depending on your device
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

            
        </>
    );
}

export default GeneralSetting;