import "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import styled from "styled-components";

const Overlay = styled(AlertDialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
`;

const Content = styled(AlertDialogPrimitive.Content)`
  background: var(--card);
  color: var(--card-foreground);
  padding: 2rem;
  border-radius: var(--radius);
  max-width: 400px;
  margin: 10% auto;
`;

const Title = styled(AlertDialogPrimitive.Title)`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Description = styled(AlertDialogPrimitive.Description)`
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  background: var(--primary);
  color: var(--primary-foreground);
  cursor: pointer;
`;

export const AlertDialog = ({ open, onOpenChange, title, description, onConfirm }) => (
  <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <Overlay />
    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
        <AlertDialogPrimitive.Cancel asChild>
          <Button>Cancel</Button>
        </AlertDialogPrimitive.Cancel>
        <AlertDialogPrimitive.Action asChild>
          <Button onClick={onConfirm}>Confirm</Button>
        </AlertDialogPrimitive.Action>
      </div>
    </Content>
  </AlertDialogPrimitive.Root>
);

