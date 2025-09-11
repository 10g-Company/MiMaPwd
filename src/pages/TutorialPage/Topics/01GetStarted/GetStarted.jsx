import React from "react";
import { Link } from 'react-router-dom';
import Note from "../../../../components/Note/Note";

// import images
import getstarted_1 from "../../../../assets/images/getstarted-1.png";
import getstarted_set_password from "../../../../assets/images/getstarted-set_password.png";
import getstarted_agreement from "../../../../assets/images/getstarted-agreement.png";
import homepage_intro from "../../../../assets/images/homepage-intro.png";
import homepage_filter from "../../../../assets/images/homepage-filter.png";
import homepage_filter_summary from "../../../../assets/images/homepage-filter_summary.png";

export default function GetStarted() {
    return (
        <>
            <h1>Get Started</h1>

            <section>
                <h3>Launching the app for the 1st time</h3>
                <p>
                    When you launch the app for the 1st time, you will need to set a <b>Master Password</b> and agree to
                    the <b>terms & conditions</b>.
                </p>
                <ol className="number-list">
                    <li>
                        Click [OK] to go to the <b>Set Password</b> page
                        <img src={getstarted_1} alt="Password Requirement" />
                    </li>
                    <li>
                        Enter your password, re-confirm your password, and click [Submit] button.
                        <img src={getstarted_set_password} alt="Set Password" />

                        <Note>
                            Must follow the <Link to="/tutorial?topic=security#pwdrequirement">Password Requirements</Link>
                        </Note>
                    </li>
                    <li>
                        Review the <b>Privacy Policy</b> and <b>Terms & Conditions</b>, and click on [I Agree] button.
                        <img src={getstarted_agreement} alt="Agreement" />
                    </li>
                </ol>
            </section>

            <section id="homepage">
                <h3>Home Page</h3>
                <img src={homepage_intro} alt="Home Page Intro" />
                <ol className="alpha-list">
                    <li>Go to the <Link to="/tutorial?topic=general">Setting Page</Link></li>
                    <li>
                        Search Panel
                        <Note>You must enter at least 3 characters</Note>
                    </li>
                    <li>
                        Open/Close the Filter Panel
                        <ol className="roman-list">
                            <li>
                                Click to open the filter panel
                                <img src={homepage_filter} alt="Filter Panel" />
                            </li>
                            <li>Click again or use [back] navigation button to close the filter panel.</li>
                            <li>
                                When you have applied a filter, the filter icon will be highlighted and the filter summary will be displayed
                                <img src={homepage_filter_summary} alt="Filter Summary" />
                            </li>
                        </ol>
                    </li>
                    <li>
                        Record Group Header
                        <ol className="roman-list">
                            <li>
                                Records are grouped by the type (e.g. web login, email, passport, etc).
                            </li>
                            <li>
                                Click on the header to expand or collapse the group.
                            </li>
                            <li>
                                Long press on the header to expand or collapse all groups.
                            </li>
                        </ol>
                        <Note>
                            Groups are sorted in alphabetical order
                        </Note>
                    </li>
                    <li>
                        Record list: Click to view the record details
                        <Note>
                            The list is sorted in alphabetical order
                        </Note>
                    </li>
                    <li>Create <Link to="/tutorial?topic=record">New Record</Link></li>
                </ol>
            </section>

           
        </>
    );
}