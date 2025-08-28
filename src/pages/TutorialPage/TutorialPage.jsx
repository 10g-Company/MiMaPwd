import { useEffect } from 'react';
import './TutorialPage.css';

function TutorialPage() {
    useEffect(() => {
        document.title = "Get Started";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <h1>Hello World !!! </h1>
        </>
    );
}

export default TutorialPage;