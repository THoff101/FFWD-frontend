import * as React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  height: 2.25rem;
  width: 100%;
  min-width: 0;
  border-radius: 0.375rem;
  border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  background-color: var(--input-background, #f3f3f5);
  color: var(--foreground, #111827);
  transition: color 0.2s, box-shadow 0.2s;
  outline: none;
  
  &::placeholder {
    color: var(--muted-foreground, #717182);
  }
  
  &::selection {
    background-color: var(--primary, #030213);
    color: var(--primary-foreground, #ffffff);
  }
  
  &:focus-visible {
    border-color: var(--ring, #6b7280);
    box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.5);
  }
  
  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &[aria-invalid="true"] {
    border-color: var(--destructive, #d4183d);
    box-shadow: 0 0 0 3px rgba(212, 24, 61, 0.2);
  }
  
  /* File input styles */
  &[type="file"] {
    &::file-selector-button {
      color: var(--foreground, #111827);
      display: inline-flex;
      height: 1.75rem;
      border: 0;
      background-color: transparent;
      font-size: 0.875rem;
      font-weight: 500;
      margin-right: 0.5rem;
      cursor: pointer;
    }
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <StyledInput
      type={type}
      data-slot="input"
      className={className}
      {...props}
    />
  );
}

export { Input };