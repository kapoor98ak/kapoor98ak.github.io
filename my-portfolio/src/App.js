import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import Footer from './components/Footer';
import MKDocs from './components/MKDocs'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route exact path="/" element={<ProfileSection />} />
                    <Route path="/mkdocs" element={<MKDocs />} />
                </Routes>
                <Footer />
            </div>
        </Router>    
    );
}

export default App;
