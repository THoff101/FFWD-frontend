import "react";
import { Slot } from "@radix-ui/react-slot";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 500;
  cursor: pointer;
  background: ${({ variant }) =>
    variant === "secondary" ? "var(--secondary)" :
    variant === "destructive" ? "var(--destructive)" :
    "var(--primary)"};
  color: ${({ variant }) =>
    variant === "secondary" ? "var(--secondary-foreground)" :
    variant === "destructive" ? "var(--destructive-foreground)" :
    "var(--primary-foreground)"};
`;

export const Button = ({ asChild, variant = "default", children, ...props }) => {
  const Comp = asChild ? Slot : "button";
  return (
    <StyledButton as={Comp} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
