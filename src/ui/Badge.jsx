import "react";
import styled from "styled-components";

const StyledBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 500;
  background: ${({ variant }) =>
    variant === "secondary" ? "var(--in-progress)" :
    variant === "destructive" ? "var(--destructive)" :
    "var(--in-progress)"};
  color: ${({ variant }) =>
    variant === "secondary" ? "var(--secondary-foreground)" :
    variant === "destructive" ? "var(--destructive-foreground)" :
    "var(--in-progress-foreground)"};
`;

export const Badge = ({ children, variant = "default" }) => {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
};

