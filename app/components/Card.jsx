import React from 'react';

export default function Card({ children, className = '', ...props }) {
  return (
    <div
      {...props}
      className={
        'rounded-xl border border-border bg-surface text-primary p-4 shadow-card hover:shadow-card-hover hover:bg-surface-hover transition-all duration-200 ' +
        className
      }
    >
      {children}
    </div>
  );
}