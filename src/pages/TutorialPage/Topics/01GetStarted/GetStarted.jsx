import React from "react";
import { Link } from 'react-router-dom';
import Note from "../../../../components/Note/Note";

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
                        <p>(add image here)</p>
                        <Note>
                            <p>Hello world</p>
                        </Note>
                    </li>
                    <li>
                        Enter your password, re-confirm your password, and click <b>Submit</b>.
                        <p>(add image here</p>
                    </li>
                    <li>
                        Next, you will need to agree to the <b>terms & conditions</b>.
                        <p>(add image here)</p>
                    </li>
                </ol>
            </section>

            <section id="homepage">
                <h3>Home Page</h3>
                <p>(add image here)</p>
                <ol className="alpha-list">
                    <li>Go to the <b>Setting Page</b></li>
                    <li>Search Panel</li>
                    <li>Open/Close the Filter Panel</li>
                    <li>Record Group Header</li>
                    <li>Scroll to top</li>
                    <li>Create <Link to="/tutorial?topic=record#recordicon">New Record</Link></li>
                </ol>
            </section>

            <section>
                <h3>Record Listview</h3>
                <p>(add image here)</p>
                <ol className="alpha-list">
                    <li>Records are sorted in alphabetical order</li>
                    <li>
                        Records are grouped by the record's type. On the group's header, you can:
                        <ol className="roman-list">
                            <li><b>Click</b> to expand or collapse the group</li>
                            <li><b>Long press</b> to collapse or expand all groups</li>
                        </ol>
                    </li>
                    
                </ol>
            </section>
        </>
    );
}