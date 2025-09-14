import "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--input-background);
  color: var(--foreground);
  resize: vertical;
`;

export const Textarea = (props) => <StyledTextarea {...props} />;

