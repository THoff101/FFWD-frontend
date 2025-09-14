import "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import styled from "styled-components";

const StyledToggle = styled(TogglePrimitive.Root)`
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  cursor: pointer;

  &[data-state="on"] {
    background: var(--primary);
    color: var(--primary-foreground);
  }
`;

export const Toggle = ({ pressed, onPressedChange, children }) => (
  <StyledToggle pressed={pressed} onPressedChange={onPressedChange}>
    {children}
  </StyledToggle>
);

