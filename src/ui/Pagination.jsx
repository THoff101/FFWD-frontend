import "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const PageButton = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: ${({ active }) => (active ? "var(--primary)" : "transparent")};
  color: ${({ active }) => (active ? "var(--primary-foreground)" : "inherit")};
  cursor: pointer;
`;

export const Pagination = ({ total = 5, current = 1, onChange }) => {
  return (
    <Wrapper>
      {Array.from({ length: total }).map((_, idx) => {
        const page = idx + 1;
        return (
          <PageButton
            key={page}
            active={page === current}
            onClick={() => onChange && onChange(page)}
          >
            {page}
          </PageButton>
        );
      })}
    </Wrapper>
  );
};

