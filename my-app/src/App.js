
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Text from './components/Text';
import QrGenerator from './components/QrGenerator';
import ChatBox from './components/ChatBox';

function App() {
  const [sharedText, setSharedText] = useState('');
  const [isDark, setIsDark] = useState(true); 
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      <div className={isDark ? 'dark-mode' : 'light-mode'}>
        <Navbar title="MyApp" isDark={isDark} setIsDark={setIsDark}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Text heading="Enter Text" text={sharedText} setText={setSharedText}/>} />
            <Route path="/qr-generator" element={<QrGenerator text={sharedText}/>} />
          </Routes>
        </div>
        
        {/* Floating Chat Icon */}
        <div className="chat-icon" onClick={() => setIsChatOpen(!isChatOpen)}>
          <i className={`fa-solid ${isChatOpen ? 'fa-xmark' : 'fa-comments'}`}></i>
        </div>

        {/* Chat Box */}
        <ChatBox isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} isDark={isDark} />
      </div>
    </Router>
  );
}

export default App;
