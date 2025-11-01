import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IconGallery from './pages/IconGallery';
import AnimationDemo from './pages/AnimationDemo';
import Recipes from './pages/Recipes';
import { Toaster } from './components/ui/sonner';
import Navbar from './components/Navbar';
import Legal from './pages/Legal';
import { Analytics } from '@vercel/analytics/react';

function AppContent() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<IconGallery />} />
        <Route path="/animations" element={<AnimationDemo />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      <Toaster />
      <Analytics />
    </div>
  );
}

export default App;