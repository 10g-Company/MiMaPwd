import React from "react";
import { Link } from 'react-router-dom';
import Note from "../../../../components/Note/Note";

import record_add from "../../../../assets/images/record-add.png";
import record_select_type from "../../../../assets/images/record-select_type.png";
import record_save from "../../../../assets/images/record-save.png";
import record_vault from "../../../../assets/images/record-vault.png";
import record_vault_select from "../../../../assets/images/record-vault_select.png";
import record_icon from "../../../../assets/images/record-icon.png";
import record_icon_select from "../../../../assets/images/record-icon_select.png";
import record_starred from "../../../../assets/images/record-starred.png";
import record_image from "../../../../assets/images/record-image.png";

export default function Record() {
    return (
        <>
            <h1>Record</h1>

            <section>
                <h3>Create new record</h3>
                <ol className="number-list">
                    <li>
                        In the <b>Home Page</b>, click on the [+] button
                        <img src={record_add} alt="Add Record" />
                    </li>
                    <li>
                        Select a record type. In this popup, you can also see the last 5 record types you have previously used.
                        <img src={record_select_type} alt="Select Record Type" />
                    </li>
                    

                    <li>
                        Click on the [Save] button to save the record.
                        <img src={record_save} alt="Save Record" />
                        <Note>
                            <p>[Name] is a required field, without it, the [Save] button will be disabled</p>
                            
                        </Note>
                    </li>
                </ol>
            </section>
            
            <section id="recordicon">
                <h3>Record Icon</h3>
                <ol className="number-list">
                    <li>
                        You can change the record's icon by clicking on the [Icon] image.
                        <img src={record_icon} alt="Record Icon" />
                    </li>
                    <li>
                        You can select from the existing icon list or use an image from your gallery.
                        <img src={record_icon_select} alt="Select Record Icon" />
                    </li>
                </ol>

                <Note>
                    <ol className="alpha-list">
                        <li>Image's aspect ratio must be 1:1 (same height and width)</li>
                        <li>After you have added an icon from your gallery and saved your record, it will appear in the existing icon list</li>
                    </ol>
                    
                </Note>
            </section>

            <section>
                <h3>Assign Record to a Vault</h3>
                <ol className="number-list">
                    <li>
                        By default, new records are created in the <b>General</b> Vault. And if you change to another vault,
                        sequence new record will be defaulted to that vault. You can change the vault by clicking on the [Vault] field.
                        <img src={record_vault} alt="Select Vault" />
                    </li>
                    <li>
                        You can select an existing vault or create a new vault by entering the vault's name and click [Save] button.
                        <img src={record_vault_select} alt="Select Vault" />
                    </li>
                </ol>
                <Note>
                    <ol className="alpha-list">
                        <li>The existing vault list is auto-generated based on all your records' assigned vault</li>
                        <li>When a new vault is created, and the record is saved. The new vault will be available for selection</li>
                        <li>To change a vault's name, use the <Link>Rename/Move Vault</Link> feature in the [Setting Page]</li>
                        <li>
                            You don't need to delete empty vault. Once all records are moved/re-assigned to another vault, the empty vault
                            will be automatically removed from the vault list.
                        </li>
                    </ol>
                </Note>
            </section>

            <section>
                <h3>Starred the Record</h3>
                <ol className="number-list">
                    <li>
                        Click on the [Star] icon to mark the record as a favorite. Starred records will appear at the very top of the
                        record list in the Home Page. You can also filter the record list to show only starred records in the Home Page.
                        <img src={record_starred} alt="Starred Record" />
                    </li>
                </ol>
            </section>

            <section>
                <h3>Add Image to Record</h3>
                <ol className="number-list">
                    <li>
                        You can add images to a record from the camera or pick from your gallery.
                        <img src={record_image} alt="Add Image to Record" />
                        <Note>
                            <p>The images will have an additional layer of encryption</p>
                        </Note>
                    </li>
                </ol>
            </section>
        </>
    );
}