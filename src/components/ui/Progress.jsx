import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Progress = ({
  className,
  value = 0,
  label,
  icon: Icon,
  ...props
}) => {
  return (
    <div className={cn("w-full space-y-2", className)} {...props}>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-white/90">
          {Icon && <Icon className="text-accent-cyan text-lg" />}
          <span className="font-medium">{label}</span>
        </div>
        <span className="font-mono text-accent-cyan">{value}%</span>
      </div>
      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default Progress;
