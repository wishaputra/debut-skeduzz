import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './pages/SplashScreen';
import Introduction from './pages/Introduction';
import Biodata from './pages/Biodata';
import Lore from './pages/Lore';
import CharSheet from './pages/CharSheet';
import Navigation from './components/Navigation';
import Transition from './components/Transition';

function App() {
  const [showTransition, setShowTransition] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handlePlay = () => {
    setShowTransition(true);
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
    navigate('/intro');
  };

  return (
    <div className="relative min-h-screen w-full bg-vt-black overflow-x-hidden selection:bg-vt-red selection:text-white">
      {/* Global Transition Overlay */}
      <Transition isVisible={showTransition} onComplete={handleTransitionComplete} />

      {/* Main Content Router */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<SplashScreen onPlay={handlePlay} />} />
          <Route path="/intro" element={<Introduction />} />
          <Route path="/biodata" element={<Biodata />} />
          <Route path="/lore" element={<Lore />} />
          <Route path="/charsheet" element={<CharSheet />} />
        </Routes>
      </AnimatePresence>

      {/* Persistent Game HUD Menu */}
      {!showTransition && <Navigation />}
    </div>
  );
}

export default App;
