import "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import styled from "styled-components";

const Item = styled(AccordionPrimitive.Item)`
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 0.5rem;
`;

const Header = styled(AccordionPrimitive.Header)`
  margin: 0;
`;

const Trigger = styled(AccordionPrimitive.Trigger)`
  width: 100%;
  padding: 1rem;
  background: var(--card);
  color: var(--card-foreground);
  font-weight: 500;
  text-align: left;
  border: none;
  cursor: pointer;
`;

const Content = styled(AccordionPrimitive.Content)`
  padding: 1rem;
  background: var(--muted);
  color: var(--muted-foreground);
`;

export const Accordion = ({ items }) => (
  <AccordionPrimitive.Root type="single" collapsible>
    {items.map((item, idx) => (
      <Item key={idx} value={`item-${idx}`}>
        <Header>
          <Trigger>{item.title}</Trigger>
        </Header>
        <Content>{item.content}</Content>
      </Item>
    ))}
  </AccordionPrimitive.Root>
);

