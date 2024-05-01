import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">  {/* This div wraps the main content */}
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;