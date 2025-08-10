import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useIsHomePage from '../../hooks/useIsHomePage';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    // check the current page
    const isHomePage = useIsHomePage();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean-up function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="main-header">

            <Link to="/" className="logo-container">
                <img src="images/logo.png" alt="App Logo" />
                <span className="logo-text">MiMaPwd</span>
            </Link>
            {isHomePage && (
                <nav>
                    <ul className="nav-links">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#help">Help</a></li>
                    </ul>
                </nav>
            )}
            
        </header>
    );
}

export default Header;