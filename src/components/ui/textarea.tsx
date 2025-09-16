import * as React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  resize: none;
  border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  display: flex;
  min-height: 4rem;
  width: 100%;
  border-radius: 0.375rem;
  background-color: var(--input-background, #f3f3f5);
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  color: var(--foreground, #111827);
  transition: color 0.2s, box-shadow 0.2s;
  outline: none;
  
  &::placeholder {
    color: var(--muted-foreground, #717182);
  }
  
  &:focus-visible {
    border-color: var(--ring, #6b7280);
    box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.5);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &[aria-invalid="true"] {
    border-color: var(--destructive, #d4183d);
    box-shadow: 0 0 0 3px rgba(212, 24, 61, 0.2);
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <StyledTextarea
      data-slot="textarea"
      className={className}
      {...props}
    />
  );
}

export { Textarea };