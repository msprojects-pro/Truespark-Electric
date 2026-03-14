'use client';

import { motion } from 'framer-motion';
import { Button, buttonVariants } from './button';
import { cn } from '@/lib/utils';

interface ElectricButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'amber' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
}

export default function ElectricButton({
  variant = 'cyan',
  size = 'default',
  className,
  children,
  ...props
}: ElectricButtonProps) {
  const variants = {
    cyan: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50',
    amber: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/50',
    outline: 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-white',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        className={cn(
          buttonVariants({ size }),
          variants[variant],
          'transition-all duration-300',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}
