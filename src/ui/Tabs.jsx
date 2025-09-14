import "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import styled from "styled-components";

const Root = styled(TabsPrimitive.Root)`
  display: flex;
  flex-direction: column;
`;

const List = styled(TabsPrimitive.List)`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Trigger = styled(TabsPrimitive.Trigger)`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: var(--radius);
  background: ${({ "data-state": state }) => state === "active" ? "var(--primary)" : "var(--muted)"};
  color: ${({ "data-state": state }) => state === "active" ? "var(--primary-foreground)" : "var(--muted-foreground)"};
`;

const Content = styled(TabsPrimitive.Content)`
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
`;

export const Tabs = ({ tabs, defaultValue }) => (
  <Root defaultValue={defaultValue}>
    <List>
      {tabs.map((t, idx) => (
        <Trigger key={idx} value={t.value}>{t.label}</Trigger>
      ))}
    </List>
    {tabs.map((t, idx) => (
      <Content key={idx} value={t.value}>{t.content}</Content>
    ))}
  </Root>
);

