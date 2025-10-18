import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import IconGallery from './pages/IconGallery';
import AnimationDemo from './pages/AnimationDemo';
import EntranceAnimations from './pages/EntranceAnimations';
import { Toaster } from './components/ui/sonner';
import Navbar from './components/Navbar';
import Legal from './pages/Legal';

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname === '/' || location.pathname === '/legal' || location.pathname === '/entrance' || location.pathname === '/gallery' || location.pathname === '/animations';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<IconGallery />} />
        <Route path="/animations" element={<AnimationDemo />} />
        <Route path="/entrance" element={<EntranceAnimations />} />
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
    </div>
  );
}

export default App;