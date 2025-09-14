import "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
`;

const Label = styled.span`
  font-weight: 600;
`;

const ConsolidationStepParties = ({ consolidation }) => {
  // ⚡ placeholder parties
  const parties = consolidation.parties || [
    { role: "Shipper", name: "ABC Exports Pty Ltd" },
    { role: "Consignee", name: "XYZ Imports Ltd" },
    { role: "Forwarder", name: "FFWD Logistics" }
  ];

  return (
    <List>
      {parties.map((party, index) => (
        <Item key={index}>
          <Label>{party.role}:</Label> {party.name}
        </Item>
      ))}
    </List>
  );
};

export default ConsolidationStepParties;