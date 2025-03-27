import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GlowingCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 350,
      }}
    >
      <div className="w-8 h-8 bg-blue-500/30 rounded-full blur-xl" />
    </motion.div>
  );
};

export default GlowingCursor;