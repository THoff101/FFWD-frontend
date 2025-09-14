import "react";
import * as RadixSelect from "@radix-ui/react-select";
import styled from "styled-components";

const Trigger = styled(RadixSelect.Trigger)`
  padding: 0.5rem 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--card);
  color: var(--card-foreground);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 12rem;
`;

const Content = styled(RadixSelect.Content)`
  background: var(--card);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  overflow: hidden;
`;

const Item = styled(RadixSelect.Item)`
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background: var(--muted);
  }
`;

const Value = RadixSelect.Value;

const Select = RadixSelect.Root;
const SelectTrigger = Trigger;
const SelectContent = Content;
const SelectItem = Item;
const SelectValue = Value;
export {Select, SelectTrigger, SelectContent, SelectItem, SelectValue}