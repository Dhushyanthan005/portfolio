import React from 'react';
import { cn } from '../../utils/cn';

const Badge = ({
  className,
  variant = 'outline', // outline, cyan, purple, gradient
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full transition-all duration-300';
  
  const variants = {
    outline: 'border border-white/10 bg-slate-900/50 text-white/80 hover:border-accent-cyan/30 hover:text-white',
    cyan: 'border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.15)]',
    purple: 'border border-accent-purple/30 bg-accent-purple/10 text-accent-purple shadow-[0_0_10px_rgba(139,92,246,0.15)]',
    gradient: 'border border-transparent bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 text-white border-white/5 hover:border-accent-cyan/30'
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
