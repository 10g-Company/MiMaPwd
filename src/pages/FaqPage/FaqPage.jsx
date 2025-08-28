import { useEffect } from 'react';
import './FaqPage.css';

function FaqPagePage() {
    useEffect(() => {
        document.title = "FAQ";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <h1>Hello World !!! </h1>
        </>
    );
}

export default FaqPagePage;