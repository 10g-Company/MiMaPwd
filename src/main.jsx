import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import { PopupProvider } from './behaviors/PopupContext';
import ScrollToAnchor from './behaviors/ScrollToAnchor';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router basename="/MiMaPwd/">
            <ScrollToAnchor />
            <PopupProvider>
                <App />
            </PopupProvider>
        </Router>
    </StrictMode>
)
