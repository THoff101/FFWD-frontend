import * as React from "react";
import styled from "styled-components";
import { Slot } from "@radix-ui/react-slot@1.1.2";

// Base Button Styles
const BaseButton = styled.button<{ $variant: string; $size: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  outline: none;
  
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:focus-visible {
    ring: 3px solid rgba(var(--ring-rgb, 107, 114, 128), 0.5);
  }

  svg {
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  /* Variant Styles */
  ${props => {
    switch (props.$variant) {
      case 'default':
        return `
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          &:hover:not(:disabled) {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `;
      case 'destructive':
        return `
          background-color: var(--destructive, #d4183d);
          color: white;
          
          &:hover:not(:disabled) {
            background-color: rgba(212, 24, 61, 0.9);
          }
        `;
      case 'outline':
        return `
          border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
          background-color: var(--background, #ffffff);
          color: var(--foreground, #111827);
          
          &:hover:not(:disabled) {
            background-color: var(--accent, #e9ebef);
            color: var(--accent-foreground, #030213);
          }
        `;
      case 'secondary':
        return `
          background-color: var(--secondary, #f1f5f9);
          color: var(--secondary-foreground, #030213);
          
          &:hover:not(:disabled) {
            background-color: rgba(241, 245, 249, 0.8);
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: var(--foreground, #111827);
          
          &:hover:not(:disabled) {
            background-color: var(--accent, #e9ebef);
            color: var(--accent-foreground, #030213);
          }
        `;
      case 'link':
        return `
          color: var(--primary, #030213);
          text-decoration: underline;
          text-underline-offset: 4px;
          background-color: transparent;
          
          &:hover:not(:disabled) {
            text-decoration: underline;
          }
        `;
      default:
        return `
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          &:hover:not(:disabled) {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `;
    }
  }}

  /* Size Styles */
  ${props => {
    switch (props.$size) {
      case 'sm':
        return `
          height: 2rem;
          padding: 0 0.75rem;
          border-radius: 0.375rem;
          gap: 0.375rem;
          
          &:has(svg) {
            padding: 0 0.625rem;
          }
        `;
      case 'lg':
        return `
          height: 2.5rem;
          padding: 0 1.5rem;
          border-radius: 0.375rem;
          
          &:has(svg) {
            padding: 0 1rem;
          }
        `;
      case 'icon':
        return `
          width: 2.25rem;
          height: 2.25rem;
          padding: 0;
          border-radius: 0.375rem;
        `;
      default:
        return `
          height: 2.25rem;
          padding: 0 1rem;
          
          &:has(svg) {
            padding: 0 0.75rem;
          }
        `;
    }
  }}
`;

const StyledSlot = styled(Slot)<{ $variant: string; $size: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  outline: none;
  
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:focus-visible {
    ring: 3px solid rgba(var(--ring-rgb, 107, 114, 128), 0.5);
  }

  svg {
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  /* Variant Styles */
  ${props => {
    switch (props.$variant) {
      case 'default':
        return `
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          &:hover:not(:disabled) {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `;
      case 'destructive':
        return `
          background-color: var(--destructive, #d4183d);
          color: white;
          
          &:hover:not(:disabled) {
            background-color: rgba(212, 24, 61, 0.9);
          }
        `;
      case 'outline':
        return `
          border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
          background-color: var(--background, #ffffff);
          color: var(--foreground, #111827);
          
          &:hover:not(:disabled) {
            background-color: var(--accent, #e9ebef);
            color: var(--accent-foreground, #030213);
          }
        `;
      case 'secondary':
        return `
          background-color: var(--secondary, #f1f5f9);
          color: var(--secondary-foreground, #030213);
          
          &:hover:not(:disabled) {
            background-color: rgba(241, 245, 249, 0.8);
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: var(--foreground, #111827);
          
          &:hover:not(:disabled) {
            background-color: var(--accent, #e9ebef);
            color: var(--accent-foreground, #030213);
          }
        `;
      case 'link':
        return `
          color: var(--primary, #030213);
          text-decoration: underline;
          text-underline-offset: 4px;
          background-color: transparent;
          
          &:hover:not(:disabled) {
            text-decoration: underline;
          }
        `;
      default:
        return `
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          &:hover:not(:disabled) {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `;
    }
  }}

  /* Size Styles */
  ${props => {
    switch (props.$size) {
      case 'sm':
        return `
          height: 2rem;
          padding: 0 0.75rem;
          border-radius: 0.375rem;
          gap: 0.375rem;
          
          &:has(svg) {
            padding: 0 0.625rem;
          }
        `;
      case 'lg':
        return `
          height: 2.5rem;
          padding: 0 1.5rem;
          border-radius: 0.375rem;
          
          &:has(svg) {
            padding: 0 1rem;
          }
        `;
      case 'icon':
        return `
          width: 2.25rem;
          height: 2.25rem;
          padding: 0;
          border-radius: 0.375rem;
        `;
      default:
        return `
          height: 2.25rem;
          padding: 0 1rem;
          
          &:has(svg) {
            padding: 0 0.75rem;
          }
        `;
    }
  }}
`;

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: ButtonProps) {
  if (asChild) {
    return (
      <StyledSlot
        data-slot="button"
        $variant={variant}
        $size={size}
        className={className}
        {...props}
      />
    );
  }

  return (
    <BaseButton
      data-slot="button"
      $variant={variant}
      $size={size}
      className={className}
      {...props}
    />
  );
}

export { Button };