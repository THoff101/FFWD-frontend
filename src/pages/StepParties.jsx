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

const StepParties = () => {
  // ⚡ placeholder parties
  const parties = [
    { role: "Shipper", name: "ABC Exports Pty Ltd" },
    { role: "Consignee", name: "XYZ Imports Ltd" },
    { role: "Forwarder", name: "FFWD Logistics" }
  ];

  return (
    <Wrapper>
      <Title>Step: Parties</Title>
      <List>
        {parties.map((party, index) => (
          <Item key={index}>
            <strong>{party.role}:</strong> {party.name}
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default StepParties;