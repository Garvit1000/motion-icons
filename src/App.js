import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IconGallery from './pages/IconGallery';
import AnimationDemo from './pages/AnimationDemo';
import EntranceAnimations from './pages/EntranceAnimations';
import { Toaster } from './components/ui/sonner';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Navbar />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<IconGallery />} />
          <Route path="/animations" element={<AnimationDemo />} />
          <Route path="/entrance" element={<EntranceAnimations />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;