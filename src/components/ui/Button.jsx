import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Button = React.forwardRef(({
  className,
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  const variants = {
    primary: 'bg-accent-cyan text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.55)] border border-transparent',
    secondary: 'glass-panel text-white hover:bg-white/10 border border-white/10 hover:border-accent-cyan/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]',
    outline: 'bg-transparent border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10',
    glow: 'bg-accent-cyan text-background-primary font-semibold shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] border border-transparent',
    ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5 border border-transparent'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
