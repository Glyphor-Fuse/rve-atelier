export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-xs">
          <h2 className="text-2xl font-serif mb-6 tracking-tighter">RÊVE ATELIER</h2>
          <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-wider">
            A research laboratory focused on the intersection of generative intelligence and high-fashion philosophy. 
            © 2024 / Paris - Tokyo - Metaverse.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">Connect</span>
            <a href="#" className="text-sm hover:text-lavender-200 transition-colors">Instagram</a>
            <a href="#" className="text-sm hover:text-lavender-200 transition-colors">Foundation</a>
            <a href="#" className="text-sm hover:text-lavender-200 transition-colors">Discord</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">Studio</span>
            <a href="#" className="text-sm hover:text-lavender-200 transition-colors">Privacy</a>
            <a href="#" className="text-sm hover:text-lavender-200 transition-colors">Licensing</a>
            <a href="#" className="text-sm hover:text-lavender-200 transition-colors">Careers</a>
          </div>
          <div className="hidden md:flex flex-col gap-3">
            <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">Inquiry</span>
            <p className="text-sm text-zinc-400">concierge@reve.atelier</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[8px] uppercase tracking-[0.4em] text-zinc-600">
        <span>Designed for the conscious.</span>
        <span>Built by Rêve Engineering.</span>
      </div>
    </footer>
  );
};