import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Button Component
export const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) => {
  const variants = {
    primary: 'bg-foreground text-background hover:opacity-90',
    secondary: 'bg-primary text-primary-foreground hover:opacity-90',
    outline: 'border-2 border-foreground/10 hover:border-foreground/20 bg-transparent',
    ghost: 'hover:bg-foreground/5 bg-transparent text-muted-foreground hover:text-foreground',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs rounded-xl',
    md: 'px-6 py-3 text-sm rounded-2xl',
    lg: 'px-8 py-4 text-base rounded-2xl',
    xl: 'px-10 py-5 text-lg rounded-3xl',
  };

  return (
    <button 
      className={cn(
        'font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// Card Component
export const Card = ({ 
  children, 
  className, 
  padding = 'md',
  interactive = false,
  style
}: { 
  children: React.ReactNode; 
  className?: string; 
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
  style?: React.CSSProperties;
}) => {
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-8',
    lg: 'p-12',
  };

  return (
    <div 
      style={style}
      className={cn(
        'rounded-[2rem] border border-foreground/10 bg-foreground/5 overflow-hidden transition-all duration-500',
        interactive && 'hover:border-primary/30 hover:bg-primary/5 cursor-pointer',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
};

// Section Heading Component
export const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'center',
  className 
}: { 
  title: string; 
  subtitle?: string; 
  align?: 'left' | 'center';
  className?: string;
}) => {
  return (
    <div className={cn('space-y-4 mb-12', align === 'center' ? 'text-center' : 'text-left', className)}>
      <h2 className="text-4xl md:text-5xl font-serif italic tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

// Badge Component
export const Badge = ({ 
  children, 
  className,
  variant = 'default'
}: { 
  children: React.ReactNode; 
  className?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning';
}) => {
  const variants = {
    default: 'bg-foreground/10 text-muted-foreground',
    primary: 'bg-primary/10 text-primary',
    success: 'bg-green-500/10 text-green-600',
    warning: 'bg-amber-500/10 text-amber-600',
  };

  return (
    <span className={cn(
      'text-[10px] font-sans uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};
