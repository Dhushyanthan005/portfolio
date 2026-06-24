import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Card = React.forwardRef(({
  className,
  children,
  hoverGlow = true,
  glowColor = 'cyan', // cyan or purple
  delay = 0,
  ...props
}, ref) => {
  const glowClasses = {
    cyan: 'glass-panel-glow',
    purple: 'glass-card-purple',
    green: 'glass-card-green'
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={hoverGlow ? { y: -6, transition: { duration: 0.2 } } : {}}
      className={cn(
        'rounded-2xl p-6 glass-panel overflow-hidden transition-all duration-300',
        hoverGlow && glowClasses[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;
