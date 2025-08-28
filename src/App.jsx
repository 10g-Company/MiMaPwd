import { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import VersionComparePage from './pages/VersionComparePage/VersionComparePage';
import FaqPagePage from './pages/FaqPage/FaqPage';
import TutorialPage from './pages/TutorialPage/TutorialPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './behaviors/ScrollToTop';

function App() {
    useEffect(() => {
        document.title = "MiMaPwd";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <link rel="icon" href="images/logo.png" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />

            <ScrollToTop />
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/version-compare" element={<VersionComparePage />} />
                <Route path="/faq" element={<FaqPagePage />} />
                <Route path="/get-started" element={<TutorialPage />} />
                {/* Add more routes as needed */}
            </Routes>

            <Footer />
        </>
    )
}

export default App
