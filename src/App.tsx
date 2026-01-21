import React from 'react';
import { Navbar } from './components/Navbar';
import Index from './pages/Index';
import { GlyphorBadge } from './utils/GlyphorBadge';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Index />
      <GlyphorBadge />
    </div>
  );
}

export default App;