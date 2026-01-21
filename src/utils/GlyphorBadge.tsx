import React from 'react';

export const GlyphorBadge = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
        <div className="w-2 h-2 rounded-full bg-lavender-200 animate-pulse" />
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">
          Made with <span className="text-white">Glyphor Fuse</span>
        </span>
      </div>
    </div>
  );
};