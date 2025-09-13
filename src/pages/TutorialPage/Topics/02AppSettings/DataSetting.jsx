import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Warning from "../../../../components/Warning/Warning";
import Note from "../../../../components/Note/Note";
import ArticleToc from "../../../../components/ArticleToc/ArticleToc";

import setting_data from "../../../../assets/images/setting-data.png";
import setting_data_backup from "../../../../assets/images/setting-data_backup.png";
import setting_data_restore from "../../../../assets/images/setting-data-restore.png";
import setting_data_restore_fileinfo from "../../../../assets/images/setting-data-restore_fileinfo.png";
import setting_data_restore_auth from "../../../../assets/images/setting-data-restore_auth.png";
import setting_data_restore_confirm from "../../../../assets/images/setting-data-restore_confirm.png";
import setting_data_wipe from "../../../../assets/images/setting-data-wipe.png";
import setting_data_wipe_auth from "../../../../assets/images/setting-data-wipe_auth.png";
import setting_data_wipe_confirm from "../../../../assets/images/setting-data-wipe_confirm.png";
import setting_data_button_backup from "../../../../assets/images/setting-data-button-backup.png";
import setting_data_button_restore from "../../../../assets/images/setting-data-button-restore.png";
import setting_data_button_wipedata from "../../../../assets/images/setting-data-button-wipedata.png";

function DataSetting() {

    const toc = [
        { topic: "Backup", id: "backup" },
        { topic: "Auto Backup", id: "autobackup" },
        { topic: "Restore", id: "restore" },
        { topic: "Wipe All Data", id: "wipealldata" },
    ];

    useEffect(() => {
        document.title = "Data Setting";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <h1>Data Setting</h1>

            <ArticleToc topics={toc} />

            <section id="backup">
                <h3>Backup</h3>
                <img className="no-border" src={setting_data_button_backup} alt="Backup button" />
                <p>Create an encrypted backup file using your current password</p>
                <ol className="number-list">
                    <li>
                        If you haven't set a <Link to="/tutorial?topic=others#defaultfolder">Default folder</Link>, you will be prompted to select a folder to save the backup file
                    </li>
                    <li>
                        Click [YES] to create the backup file
                        <img src={setting_data_backup} alt="Backup Data" />
                    </li>
                </ol>
                <Warning>
                    Backup will use your current password to encrypt the backup file. Make sure you remember your current password to restore
                    the backup file.
                </Warning>
            </section>

            <section id="autobackup">
                <h3>Auto Backup</h3>
                <ol className="number-list">
                    <li>
                        Whenever you make changes to your data, an automatic backup will be created in the background.
                        The auto backup file will be saved in the <Link to="/tutorial?topic=others#defaultfolder">Default folder</Link> you
                        have set. If you didn't set a default folder, it will be save to the app's folder which is not accessible by user.
                    </li>
                    <li>
                        The main purpose of auto backup is to auto recover your data in case of critical system failure or database corruption.
                    </li>
                    <li>
                        Auto backup will only keep the last 3 backup files. Older backup files will be automatically deleted.
                    </li>
                </ol>
                <Note>
                    <ol className="alpha-list">
                        <li>Do not rely solely on auto backup. It is recommended to also create manual backup files regularly.</li>
                        <li>Do not rename the auto backup file or else, the auto recover will not be able to find the file.</li>
                    </ol>
                    
                </Note>
            </section>

            <section id="restore">
                <h3>Restore</h3>
                <img className="no-border" src={setting_data_button_restore} alt="Restore button" />
                <p>Restore data from your previous backup file</p>
                <ol className="number-list">
                    <li>
                        Click [Next] to select a backup file to restore
                        <img src={setting_data_restore} alt="Restore Data" />
                    </li>
                    <li>
                        It will display the file info of the selected backup file. Click [Ok] to proceed
                        <img src={setting_data_restore_fileinfo} alt="Restore Data File Info" />
                    </li>
                    <li>
                        Enter your password to authenticate and click [Authenticate] to proceed
                        <img src={setting_data_restore_auth} alt="Restore Data Authentication" />
                        <Note>
                            Your current password and the password used to create the backup file must match to successfully restore the
                            backup file.
                        </Note>
                    </li>
                    <li>
                        Lastly, swipe to confirm the restore action.
                        <img src={setting_data_restore_confirm} alt="Restore Data Confirm" />
                        <Warning>
                            All your current data will be replaced with the data from the backup file. This action cannot be undone.
                        </Warning>
                            
                        
                    </li>
                </ol>
            </section>

            <section id="wipealldata">
                <h3>Wipe All Data</h3>
                <img className="no-border" src={setting_data_button_wipedata} alt="Wipe All Data button" />
                <p>Delete all your data.</p>
                <ol className="number-list">
                    <li>
                        Click [Yes] to proceed
                        <img src={setting_data_wipe} alt="Wipe All Data" />
                    </li>
                    <li>
                        Enter your password to authenticate and click [Authenticate] to proceed
                        <img src={setting_data_wipe_auth} alt="Wipe All Data Authentication" />
                    </li>
                    <li>
                        Lastly, swipe to confirm the wipe action.
                        <img src={setting_data_wipe_confirm} alt="Wipe All Data Confirm" />
                    </li>
                </ol>
                <Warning>
                    This action will delete all your data and cannot be undone. Make sure you have a backup of your data before proceeding.
                </Warning>
            </section>
        </>
    );
}

export default DataSetting;