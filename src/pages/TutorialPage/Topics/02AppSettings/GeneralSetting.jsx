import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Warning from "../../../../components/Warning/Warning";
import Note from "../../../../components/Note/Note";

import general_default_folder from "../../../../assets/images/general-default_folder.png";

function GeneralSetting() {
    useEffect(() => {
        document.title = "General Setting";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <h1>General Setting</h1>
            <img className="topic_img"  />

            <section id="defaultfolder">
                <h3>Default Data Folder</h3>
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

            
        </>
    );
}

export default GeneralSetting;