import React, { useEffect } from "react";
import ArticleToc from "../../../../components/ArticleToc/ArticleToc";

import setting_others_upgradepro from "../../../../assets/images/setting-others-upgradepro.png";
import setting_others_support from "../../../../assets/images/setting-others-support.png";

function OthersSetting() {

    const toc = [
        { topic: "Upgrade to Pro", id: "upgrade" },
        { topic: "Support", id: "support" },
    ];

    useEffect(() => {
        document.title = "Other Setting";
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

export default OthersSetting;