import "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled from "styled-components";

const Overlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
`;

const Content = styled(DialogPrimitive.Content)`
  background: var(--card);
  color: var(--card-foreground);
  padding: 2rem;
  border-radius: var(--radius);
  max-width: 500px;
  margin: 10% auto;
`;

const Title = styled(DialogPrimitive.Title)`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Dialog = ({ open, onOpenChange, title, children }) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <Overlay />
    <Content>
      <Title>{title}</Title>
      {children}
    </Content>
  </DialogPrimitive.Root>
);

