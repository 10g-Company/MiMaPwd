import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import { PopupProvider } from './behaviors/PopupContext';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router basename="/MiMaPwd/">
            <PopupProvider>
                <App />
            </PopupProvider>
        </Router>
    </StrictMode>
)
