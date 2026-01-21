import React from 'react';
import { motion } from 'framer-motion';
import { Search, User } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
    >
      <div className="glass-panel rounded-full px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="text-xl font-serif tracking-tighter hover:text-lavender-200 transition-colors">
            RÊVE ATELIER
          </a>
          <div className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Collections</a>
            <a href="#" className="hover:text-white transition-colors">The Mirror</a>
            <a href="#" className="hover:text-white transition-colors">Archives</a>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <Search size={18} className="text-zinc-400 cursor-pointer hover:text-white transition-colors" />
          <User size={18} className="text-zinc-400 cursor-pointer hover:text-white transition-colors" />
          <button className="bg-pearl text-charcoal-900 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-lavender-200 transition-all">
            Enter Studio
          </button>
        </div>
      </div>
    </motion.nav>
  );
};