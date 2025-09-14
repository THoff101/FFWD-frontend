import "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  background: ${({ type }) =>
    type === "error" ? "var(--destructive)" :
    type === "success" ? "green" :
    "var(--muted)"};
  color: ${({ type }) =>
    type === "error" ? "var(--destructive-foreground)" :
    type === "success" ? "white" :
    "var(--muted-foreground)"};
`;

export const Alert = ({ type = "info", message }) => {
  return <Wrapper type={type}>{message}</Wrapper>;
};