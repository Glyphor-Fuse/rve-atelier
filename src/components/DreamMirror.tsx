import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

export const DreamMirror = () => {
  const [activeFrame, setActiveFrame] = useState(0);

  const frames = [
    "<span className="block"><img src="https://images.pexels.com/photos/13726717/pexels-photo-13726717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Elegant off-shoulder blouse paired with white pants, exuding a minimalist and stylish vibe." loading="lazy" /><a href="https://www.pexels.com/photo/a-person-wearing-a-white-off-shoulder-blouse-and-white-pants-13726717/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Valerie Voila on Pexels</a></span>",
    "<span className="block"><img src="https://images.pexels.com/photos/9403197/pexels-photo-9403197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Fashionable woman in a dimly lit room, showcasing stylish attire and accessories, striking a pose." loading="lazy" /><a href="https://www.pexels.com/photo/woman-in-short-hair-wearing-red-long-sleeve-shirt-and-plaid-trousers-carrying-hand-bags-9403197/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Arminas Vasiljev on Pexels</a></span>",
    "<span className="block"><img src="https://images.pexels.com/photos/19545626/pexels-photo-19545626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Two women wearing VR headsets explore virtual reality, captured in monochrome." loading="lazy" /><a href="https://www.pexels.com/photo/models-with-virtual-reality-goggles-on-heads-19545626/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Ila Bappa Ibrahim on Pexels</a></span>"
  ];

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 order-2 lg:order-1">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="inline-block px-3 py-1 border border-lavender-200/20 rounded-full">
            <span className="text-[10px] uppercase tracking-tighter text-lavender-100 italic">Phase 02: Neural Fitting</span>
          </div>
          <h3 className="text-5xl font-serif italic leading-tight">
            The Dream Mirror <br />
            <span className="not-italic text-zinc-400 text-3xl">— Digital Projection</span>
          </h3>
          <p className="text-zinc-400 font-light text-lg leading-relaxed">
            Our proprietary Neural-Fabric engine simulates how light interacts with non-existent materials. Witness the convergence of phantom drapes and bioluminescent silks on your own avatar.
          </p>
          
          <div className="flex gap-4">
            {frames.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveFrame(idx)}
                className={`h-1 transition-all duration-500 ${activeFrame === idx ? 'w-12 bg-lavender-200' : 'w-4 bg-zinc-800'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="lg:col-span-7 order-1 lg:order-2">
        <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeFrame}
              src={frames[activeFrame]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover filter saturate-[0.8] brightness-110"
              alt="Mirror Experience"
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
          
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center glass-panel p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-lavender-200 flex items-center justify-center text-charcoal-900">
                <Play size={16} fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-300">Active Simulation</p>
                <p className="text-xs font-semibold">HYPER-SILK MESH v4.2</p>
              </div>
            </div>
            <span className="text-[10px] text-zinc-400 font-mono tracking-tighter">00:43:12</span>
          </div>
        </div>
      </div>
    </div>
  );
};