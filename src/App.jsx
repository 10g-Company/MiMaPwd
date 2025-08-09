import { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import VersionComparePage from './pages/VersionComparePage/VersionComparePage';
import Header from './components/Header/Header';
import ScrollToTop from './behaviors/ScrollToTop';
import logo from './assets/images/logo.png'; // Ensure you have a logo image

function App() {
    useEffect(() => {
        document.title = "MiMaPwd";
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <link rel="icon" href={logo} />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />

            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/version-compare" element={<VersionComparePage />} />
                {/* Add more routes as needed */}
            </Routes>

            <footer className="footer">
                <div className="footer-links">
                    <a href="#">About Us</a>
                    <Link to="/version-compare">Version Comparison</Link>
                    <a href="whats-new.html">What's New</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact</a>
                </div>
                <p>&copy; 2025 MiMaPwd. All rights reserved.</p>
            </footer>
        </>
    )
}

export default App
