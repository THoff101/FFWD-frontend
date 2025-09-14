import "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

const Content = styled(DropdownMenuPrimitive.Content)`
  background: var(--card);
  color: var(--card-foreground);
  padding: 0.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
`;

const Item = styled(DropdownMenuPrimitive.Item)`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: var(--radius);

  &:hover {
    background: var(--muted);
  }
`;

export const DropdownMenu = ({ trigger, items }) => (
  <DropdownMenuPrimitive.Root>
    <DropdownMenuPrimitive.Trigger asChild>
      {trigger}
    </DropdownMenuPrimitive.Trigger>
    <Content>
      {items.map((item, idx) => (
        <Item key={idx} onSelect={item.onSelect}>
          {item.label}
        </Item>
      ))}
    </Content>
  </DropdownMenuPrimitive.Root>
);

