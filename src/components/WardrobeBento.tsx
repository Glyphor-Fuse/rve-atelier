import { motion } from 'framer-motion';

const items = [
  { id: 1, title: 'Lunar Shroud', img: 'https://images.pexels.com/photos/9356539/pexels-photo-9356539.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', size: 'col-span-2 row-span-2' },
  { id: 2, title: 'Void Jacket', img: 'https://images.pexels.com/photos/4107337/pexels-photo-4107337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', size: 'col-span-1 row-span-1' },
  { id: 3, title: 'Ethereal Gloom', img: 'https://images.pexels.com/photos/4006617/pexels-photo-4006617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', size: 'col-span-1 row-span-2' },
  { id: 4, title: 'Crystal Veil', img: 'https://images.pexels.com/photos/15725714/pexels-photo-15725714.png?auto=compress&cs=tinysrgb&h=650&w=940', size: 'col-span-1 row-span-1' },
];

export const WardrobeBento = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className={`${item.size} relative group overflow-hidden rounded-lg`}
        >
          <img 
            src={item.img} 
            alt={item.title} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
            <span className="text-[10px] uppercase tracking-widest text-lavender-200 mb-1">Couture Unit</span>
            <h4 className="text-xl font-serif text-white">{item.title}</h4>
          </div>
        </motion.div>
      ))}
    </div>
  );
};