import * as React from "react";
import styled from "styled-components";
import { Slot } from "@radix-ui/react-slot@1.1.2";

const BaseBadge = styled.span<{ $variant: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
  flex-shrink: 0;
  gap: 0.25rem;
  transition: color 0.2s, box-shadow 0.2s;
  overflow: hidden;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    pointer-events: none;
  }

  &:focus-visible {
    ring: 3px solid rgba(var(--ring-rgb, 107, 114, 128), 0.5);
  }

  ${props => {
    switch (props.$variant) {
      case 'default':
        return `
          border-color: transparent;
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          a&:hover {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `;
      case 'secondary':
        return `
          border-color: transparent;
          background-color: var(--secondary, #f1f5f9);
          color: var(--secondary-foreground, #030213);
          
          a&:hover {
            background-color: rgba(241, 245, 249, 0.9);
          }
        `;
      case 'destructive':
        return `
          border-color: transparent;
          background-color: var(--destructive, #d4183d);
          color: white;
          
          a&:hover {
            background-color: rgba(212, 24, 61, 0.9);
          }
        `;
      case 'outline':
        return `
          border-color: var(--border, rgba(0, 0, 0, 0.1));
          background-color: transparent;
          color: var(--foreground, #111827);
          
          a&:hover {
            background-color: var(--accent, #e9ebef);
            color: var(--accent-foreground, #030213);
          }
        `;
      default:
        return `
          border-color: transparent;
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          a&:hover {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `;
    }
  }}
`;

const StyledSlot = styled(Slot)<{ $variant: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
  flex-shrink: 0;
  gap: 0.25rem;
  transition: color 0.2s, box-shadow 0.2s;
  overflow: hidden;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    pointer-events: none;
  }

  &:focus-visible {
    ring: 3px solid rgba(var(--ring-rgb, 107, 114, 128), 0.5);
  }

  ${props => {
    switch (props.$variant) {
      case 'default':
        return `
          border-color: transparent;
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          a&:hover {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `;
      case 'secondary':
        return `
          border-color: transparent;
          background-color: var(--secondary, #f1f5f9);
          color: var(--secondary-foreground, #030213);
          
          a&:hover {
            background-color: rgba(241, 245, 249, 0.9);
          }
        `;
      case 'destructive':
        return `
          border-color: transparent;
          background-color: var(--destructive, #d4183d);
          color: white;
          
          a&:hover {
            background-color: rgba(212, 24, 61, 0.9);
          }
        `;
      case 'outline':
        return `
          border-color: var(--border, rgba(0, 0, 0, 0.1));
          background-color: transparent;
          color: var(--foreground, #111827);
          
          a&:hover {
            background-color: var(--accent, #e9ebef);
            color: var(--accent-foreground, #030213);
          }
        `;
      default:
        return `
          border-color: transparent;
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          a&:hover {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `;
    }
  }}
`;

interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  asChild?: boolean;
}

function Badge({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: BadgeProps) {
  if (asChild) {
    return (
      <StyledSlot
        data-slot="badge"
        $variant={variant}
        className={className}
        {...props}
      />
    );
  }

  return (
    <BaseBadge
      data-slot="badge"
      $variant={variant}
      className={className}
      {...props}
    />
  );
}

export { Badge };