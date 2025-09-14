import "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled from "styled-components";

const Overlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
`;

const Content = styled(DialogPrimitive.Content)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background: var(--card);
  color: var(--card-foreground);
  padding: 1rem;
  border-left: 1px solid var(--border);
`;

export const Sheet = ({ open, onOpenChange, children }) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <Overlay />
    <Content>{children}</Content>
  </DialogPrimitive.Root>
);

