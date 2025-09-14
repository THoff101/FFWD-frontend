import "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
`;

export const Chart = ({ title = "Chart", children }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {children || <p>[Placeholder chart]</p>}
    </Wrapper>
  );
};

