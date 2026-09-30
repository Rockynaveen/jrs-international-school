import React from 'react';
import { Link } from 'react-router-dom';
import { Button as ShadcnButton, buttonVariants } from './ui/button';
import { cn } from '../lib/utils';

export default function Button({
  children,
  to,
  href,
  variant = 'default',
  size = 'default',
  className = '',
  arrow = false,
  ...props
}) {
  const content = (
    <>
      <span className="font-semibold tracking-wide whitespace-nowrap">{children}</span>
      {arrow && (
        <span className="text-sm font-normal transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <ShadcnButton
      variant={variant}
      size={size}
      className={className}
      {...props}
    >
      {content}
    </ShadcnButton>
  );
}

export { ShadcnButton, buttonVariants };
