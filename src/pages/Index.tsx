import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from '../components/Hero';
import { DreamMirror } from '../components/DreamMirror';
import { WardrobeBento } from '../components/WardrobeBento';
import { Footer } from '../components/Footer';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="relative z-10">
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 -z-10 bg-gradient-to-b from-charcoal-900 via-charcoal-800 to-[#1a1325] opacity-50"
      />
      
      <Hero />
      
      <section className="py-32 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-end gap-12 mb-32"
          >
            <h2 className="text-6xl md:text-9xl font-light leading-none tracking-tighter">
              BEYOND <br />
              <span className="italic font-serif pl-12 md:pl-24">Threads.</span>
            </h2>
            <p className="max-w-sm text-zinc-400 font-sans uppercase tracking-widest text-xs leading-relaxed pb-4">
              We translate the architecture of human emotion into hyper-real digital textiles. 
              The atelier is no longer a room—it is a cognitive space.
            </p>
          </motion.div>
          
          <DreamMirror />
        </div>
      </section>

      <section className="py-32 bg-white/2 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="mb-20 flex justify-between items-end">
            <div>
              <span className="text-lavender-200 text-sm tracking-widest uppercase mb-4 block">Archive 01</span>
              <h3 className="text-5xl font-serif">The Wardrobe Fragment</h3>
            </div>
            <div className="hidden md:block h-[1px] w-1/3 bg-white/10 mb-4"></div>
          </div>
          <WardrobeBento />
        </div>
      </section>

      <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img 
            src="<span className="block"><img src="https://images.pexels.com/photos/9962757/pexels-photo-9962757.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="A captivating black and white abstract image featuring liquid-like reflections, creating an artistic and mysterious pattern." loading="lazy" /><a href="https://www.pexels.com/photo/black-and-white-photo-of-reflection-in-water-9962757/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Plato Terentev on Pexels</a></span>" 
            alt="Manifesto Background" 
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>
        <div className="relative z-10 text-center">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-7xl md:text-[12vw] font-serif leading-none text-stroke italic"
          >
            Liquid Luxury
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-pearl tracking-[0.5em] uppercase text-sm"
          >
            Designed by Intelligence. Worn by Dreams.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;