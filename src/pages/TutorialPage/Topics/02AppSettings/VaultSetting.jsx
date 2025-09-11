import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Warning from "../../../../components/Warning/Warning";
import Note from "../../../../components/Note/Note";

import setting_vault from "../../../../assets/images/setting-vault.png";
import setting_vault_from from "../../../../assets/images/setting-vault_from.png";
import setting_vault_to from "../../../../assets/images/setting-vault_to.png";
import setting_vault_confirm from "../../../../assets/images/setting-vault_confirm.png";
import setting_vault_delete from "../../../../assets/images/setting-vault_delete.png";
import setting_vault_delete_auth from "../../../../assets/images/setting-vault_delete_auth.png";
import setting_vault_delete_confirm from "../../../../assets/images/setting-vault_delete_confirm.png";

function VaultSetting() {
    useEffect(() => {
        document.title = "Vault Setting";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <h1>Vault Setting</h1>
            <img className="topic_img" src={setting_vault} alt="Vault Setting" />

            <section id="move_vault">
                <h3>Rename/Move Vault</h3>
                <p>Rename a vault's name or to move all records in a vault to another vault</p>
                <ol className="number-list">
                    <li>
                        First, select the vault you want to rename or move records from
                        <img src={setting_vault_from} alt="Select Vault" />
                    </li>
                    <li>
                        Then, select the vault you want to move or rename the records to,
                        or enter a new vault name and click [Save] to rename the vault
                        <img src={setting_vault_to} alt="Select Vault To" />
                        <Note>
                            The records in the selected "To" vault will remain in that vault; only the records in the
                            "From" vault will be moved to the "To" vault.
                        </Note>
                    </li>
                    <li>
                        And lastly, swipe the [check] icon to confirm the action
                        <img src={setting_vault_confirm} alt="Confirm Vault Action" />
                    </li>
                </ol>
            </section>

            <section>
                <h3>Delete Vault</h3>
                <p>Delete a vault and all the records in that vault</p>
                <ol className="number-list">
                    <li>
                        Select the vault you want to delete
                        <img src={setting_vault_delete} alt="Delete Vault" />
                    </li>
                    <li>
                        Authenticate using your Master Password
                        <img src={setting_vault_delete_auth} alt="Authenticate Delete Vault" />
                    </li>
                    <li>
                        And lastly, swipe the [check] icon to confirm the action
                        <img src={setting_vault_delete_confirm} alt="Confirm Delete Vault" />
                    </li>
                </ol>
                <Warning>
                    Once deleted, all records in that vault will be permanently deleted and cannot be recovered.
                </Warning>
            </section>
        </>
    );
}

export default VaultSetting;