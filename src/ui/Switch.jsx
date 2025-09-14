import "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import styled from "styled-components";

const Root = styled(SwitchPrimitive.Root)`
  width: 42px;
  height: 25px;
  background: var(--muted);
  border-radius: 9999px;
  position: relative;
  cursor: pointer;

  &[data-state="checked"] {
    background: var(--primary);
  }
`;

const Thumb = styled(SwitchPrimitive.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s;
  transform: translateX(2px);

  &[data-state="checked"] {
    transform: translateX(19px);
  }
`;

export const Switch = ({ checked, onCheckedChange }) => (
  <Root checked={checked} onCheckedChange={onCheckedChange}>
    <Thumb />
  </Root>
);

