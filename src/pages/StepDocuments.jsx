import "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 0.5rem;
  background: var(--card);
  color: var(--card-foreground);
`;

const StepDocuments = () => {
  // ⚡ placeholder docs
  const docs = [
    { id: "doc-1", name: "Packing List.pdf" },
    { id: "doc-2", name: "Commercial Invoice.pdf" },
    { id: "doc-3", name: "Bill of Lading.pdf" }
  ];

  return (
    <Wrapper>
      <Title>Step: Required Documents</Title>
      <List>
        {docs.map((doc) => (
          <Item key={doc.id}>{doc.name}</Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default StepDocuments;