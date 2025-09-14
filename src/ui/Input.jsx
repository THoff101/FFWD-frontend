import "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--input-background);
  color: var(--foreground);
  font-size: 1rem;
`;

export const Input = (props) => <StyledInput {...props} />;

