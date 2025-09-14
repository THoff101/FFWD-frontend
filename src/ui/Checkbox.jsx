import "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import styled from "styled-components";

const StyledCheckbox = styled(CheckboxPrimitive.Root)`
  all: unset;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ checked }) => (checked ? "var(--primary)" : "white")};
  color: var(--primary-foreground);
  cursor: pointer;
`;

const Indicator = styled(CheckboxPrimitive.Indicator)`
  font-size: 16px;
`;

export const Checkbox = ({ checked, onCheckedChange }) => (
  <StyledCheckbox checked={checked} onCheckedChange={onCheckedChange}>
    <Indicator>✔</Indicator>
  </StyledCheckbox>
);

