
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Text from './components/Text';
import QrGenerator from './components/QrGenerator';

function App() {
  const [sharedText, setSharedText] = useState('');

  return (
    <Router>
      <Navbar title="MyApp"/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Text heading="Enter Text" text={sharedText} setText={setSharedText}/>} />
          <Route path="/qr-generator" element={<QrGenerator text={sharedText}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
