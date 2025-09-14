import "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import styled from "styled-components";

const Root = styled(RadioGroupPrimitive.Root)`
  display: flex;
  gap: 1rem;
`;

const Item = styled(RadioGroupPrimitive.Item)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--border);
  background: white;
  cursor: pointer;

  &[data-state="checked"] {
    border-color: var(--primary);
    background: var(--primary);
  }
`;

export const RadioGroup = ({ options, value, onChange }) => (
  <Root value={value} onValueChange={onChange}>
    {options.map((opt, idx) => (
      <Item key={idx} value={opt.value} title={opt.label} />
    ))}
  </Root>
);

