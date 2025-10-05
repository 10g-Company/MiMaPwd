import React from "react";
import { Link } from 'react-router-dom';
import Note from "../../../../components/Note/Note";
import Warning from "../../../../components/Warning/Warning";
import ArticleToc from "../../../../components/ArticleToc/ArticleToc";

import record_add from "../../../../assets/images/record-add.png";
import record_edit from "../../../../assets/images/record-edit.png";
import record_select_type from "../../../../assets/images/record-select_type.png";
import record_save from "../../../../assets/images/record-save.png";
import record_vault from "../../../../assets/images/record-vault.png";
import record_vault_select from "../../../../assets/images/record-vault_select.png";
import record_icon from "../../../../assets/images/record-icon.png";
import record_icon_select from "../../../../assets/images/record-icon_select.png";
import record_icon_delete from "../../../../assets/images/record-icon_delete.png";
import record_icon_delete_confirm from "../../../../assets/images/record-icon_delete_confirm.png";
import record_starred from "../../../../assets/images/record-starred.png";
import record_image from "../../../../assets/images/record-image.png";
import record_image_delete from "../../../../assets/images/record-image_delete.png";
import record_image_delete_confirm from "../../../../assets/images/record-image_delete_confirm.png";
import record_delete from "../../../../assets/images/record-delete.png";
import record_delete_confirm from "../../../../assets/images/record-delete_confirm.png";



export default function Record() {

    const toc = [
        { topic: "Create new record", id: "newrecord" },
        { topic: "Edit record", id: "editrecord" },
        { topic: "Record Icon", id: "recordicon" },
        { topic: "Assign Record to Vault", id: "recordvault" },
        { topic: "Starred Record", id: "recordstarred" },
        { topic: "Image Attachment", id: "recordimage" },
        { topic: "Delete Record", id: "recorddelete" },
    ];

    return (
        <>
            <h1>Record</h1>

            <ArticleToc topics={toc} />

            <section id="newrecord">
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

            <section id="editrecord">
                <h3>Edit existing record</h3>
                When you view a record, click on the [Edit] button to edit the record.
                <img src={record_edit} alt="Edit Record" />
                <Note>
                    <p>
                        When you are in the <b>view</b> mode. You can long-press on a field to copy it to the clipboard.<br/>
                        Example, in the above
                        screenshot, long-press on "Vivan.Teng@example.com" and it will copy to the clipboard
                    </p>
                </Note>
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
                        <Note>
                            <ol className="alpha-list">
                                <li>Image's aspect ratio must be 1:1 (same height and width)</li>
                                <li>After you have added an icon from your gallery and saved your record, it will appear in the existing icon list</li>
                            </ol>
                        </Note>
                    </li>
                    <li>
                        To delete a user-added icon, <b>long press</b> on the icon image.
                        <img src={record_icon_delete} alt="Delete Record Icon" /><br/>
                        <p>And slide to confirm</p>
                        <img src={record_icon_delete_confirm} alt="Confirm Delete Record Icon" />

                        <Warning>
                            All records that are using this icon will be changed to the default icon.
                        </Warning>
                    </li>
                </ol>

                
            </section>

            <section id="recordvault">
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
                        <li>To change a vault's name, use the <Link to="/tutorial?topic=vault#move_vault">Rename/Move Vault</Link> feature in the [Setting Page]</li>
                        <li>
                            You don't need to delete empty vault. Once all records are moved/re-assigned to another vault, the empty vault
                            will be automatically removed from the vault list.
                        </li>
                    </ol>
                </Note>
            </section>

            <section id="recordstarred">
                <h3>Starred Record</h3>
                <ol className="number-list">
                    <li>
                        Click on the [Star] icon to mark the record as a favorite. Starred records will appear at the very top of the
                        record list in the Home Page. You can also filter the record list to show only starred records in the Home Page.
                        <img src={record_starred} alt="Starred Record" />
                    </li>
                </ol>
            </section>

            <section id="recordimage">
                <h3>Image Attachment</h3>
                <ol className="number-list">
                    <li>
                        You can add images to a record from the camera or pick from your gallery.
                        <img src={record_image} alt="Add Image to Record" />
                        <Note>
                            <p>The images will have an additional layer of encryption</p>
                        </Note>
                    </li>
                    <li>
                        To delete an image, <b>long press</b> on the image.
                        <img src={record_image_delete} alt="Delete Image from Record" /> <br/>
                        And click [Yes] to confirm.
                        <img src={record_image_delete_confirm} alt="Confirm Delete Image from Record" />
                    </li>
                </ol>
            </section>

            <section id="recorddelete">
                <h3>Delete Record</h3>
                <p>
                    To delete the record, Click on the [three dots] and click [Delete].
                    <img src={record_delete} alt="Delete Record" />
                </p> <br/>
                <p>
                    And swipe to confirm.
                    <img src={record_delete_confirm} alt="Delete record confirmation" />
                </p>
            </section>
        </>
    );
}