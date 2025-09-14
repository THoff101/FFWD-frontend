import "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid var(--border);
`;

const ConsolidationStepDocuments = ({ consolidation }) => {
  // ⚡ placeholder: pretend documents array exists
  const documents = consolidation.documents || [
    { id: "doc-1", name: "Packing List.pdf" },
    { id: "doc-2", name: "Commercial Invoice.pdf" }
  ];

  return (
    <List>
      {documents.map((doc) => (
        <Item key={doc.id}>{doc.name}</Item>
      ))}
    </List>
  );
};

export default ConsolidationStepDocuments;