import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: y1 }} className="absolute top-20 left-[10%] w-64 h-96 opacity-40">
          <img 
            src="<span className="block"><img src="https://images.pexels.com/photos/32848902/pexels-photo-32848902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="A striking model in avant-garde fashion poses amidst a serene Istanbul forest." loading="lazy" /><a href="https://www.pexels.com/photo/avant-garde-fashion-portrait-in-nature-32848902/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Eyüpcan Timur on Pexels</a></span>" 
            alt="Runway 01" 
            className="w-full h-full object-cover filter contrast-125 rounded-sm"
          />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute bottom-20 right-[15%] w-72 h-[30rem] opacity-30">
          <img 
            src="<span className="block"><img src="https://images.pexels.com/photos/15373667/pexels-photo-15373667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Elegant black and white portrait of a woman in a white dress against a dark backdrop." loading="lazy" /><a href="https://www.pexels.com/photo/woman-in-white-sundress-in-black-and-white-15373667/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Julia Vilner on Pexels</a></span>" 
            alt="Runway 02" 
            className="w-full h-full object-cover filter brightness-75 rounded-sm"
          />
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-lavender-200 tracking-[0.4em] uppercase text-xs mb-6 block">The Virtual Couture House</span>
          <h1 className="text-7xl md:text-[11vw] font-serif leading-[0.85] tracking-tighter mb-8">
            Fabricating the <br />
            <span className="italic">Subconscious.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            <button className="group flex items-center gap-4 text-pearl border-b border-pearl/30 pb-2 hover:border-pearl transition-all">
              <span className="uppercase text-xs tracking-widest">Explore Runway</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="max-w-[240px] text-zinc-500 text-[10px] uppercase text-left leading-relaxed">
              AI-driven synthesis of textile physics and neural aesthetics.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-20" />
      </div>
    </section>
  );
};