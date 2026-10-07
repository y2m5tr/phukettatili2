import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Media {
  type: 'image' | 'video';
  src: string;
}

const mediaList: Media[] = [
  { type: 'image', src: '/assets/phuket_tours.jpg' },
  { type: 'video', src: '/assets/tours_video.mp4' },
  { type: 'image', src: '/assets/phuket_hero.jpg' },
  { type: 'image', src: '/assets/phuket_yacht.jpg' },
  { type: 'image', src: '/assets/phuket_culture.jpg' },
];

export default function MediaSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // If it's a video, wait longer? Let's just do a constant 5 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[21/9] bg-brand-primary rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {mediaList[currentIndex].type === 'image' ? (
            <img
              src={mediaList[currentIndex].src}
              alt="Phuket Snapshot"
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-cover"
            >
              <source src={mediaList[currentIndex].src} type="video/mp4" />
            </video>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Progress Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {mediaList.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
              i === currentIndex ? 'bg-brand-accent w-6' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
