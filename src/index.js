import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Coinsinfo from './pages/Coinsinfo';
import Coins from './components/Coins';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/coinsinfo/:id" element={<Coinsinfo />} />
          <Route path="/coins" element={<Coins />} />
      </Routes>
      
    </BrowserRouter>



);
