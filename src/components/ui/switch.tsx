"use client";

import * as React from "react";
import styled from "styled-components";
import * as SwitchPrimitive from "@radix-ui/react-switch@1.1.3";

const StyledSwitchRoot = styled(SwitchPrimitive.Root)`
  display: inline-flex;
  height: 1.15rem;
  width: 2rem;
  flex-shrink: 0;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid transparent;
  transition: all 0.2s;
  outline: none;
  
  &[data-state="checked"] {
    background-color: var(--primary, #030213);
  }
  
  &[data-state="unchecked"] {
    background-color: var(--switch-background, #cbced4);
  }
  
  &:focus-visible {
    border-color: var(--ring, #6b7280);
    box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.5);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const StyledSwitchThumb = styled(SwitchPrimitive.Thumb)`
  background-color: var(--card, #ffffff);
  pointer-events: none;
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  box-shadow: 0 0 0 0 transparent;
  transition: transform 0.2s;
  
  &[data-state="checked"] {
    transform: translateX(calc(100% - 2px));
  }
  
  &[data-state="unchecked"] {
    transform: translateX(0);
  }
`;

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <StyledSwitchRoot
      data-slot="switch"
      className={className}
      {...props}
    >
      <StyledSwitchThumb data-slot="switch-thumb" />
    </StyledSwitchRoot>
  );
}

export { Switch };