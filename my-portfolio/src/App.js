import React from 'react';
import './App.css';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <ProfileSection />
            <Footer />
        </div>
    );
}

export default App;
