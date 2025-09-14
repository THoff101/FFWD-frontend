import "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const Section = styled.section`
  background: var(--card);
  color: var(--card-foreground);
  padding: 1rem;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: var(--primary);
  color: var(--primary-foreground);
  border-radius: var(--radius);
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const JobCreationProcess = () => {
  return (
    <PageWrapper>
      <Title>Create Job</Title>

      <Section>
        <Label>Job Title</Label>
        <Input type="text" placeholder="Enter job title" />
      </Section>

      <Section>
        <Label>Client</Label>
        <Input type="text" placeholder="Client name" />
      </Section>

      <Section>
        <Label>Origin</Label>
        <Input type="text" placeholder="Origin" />
      </Section>

      <Section>
        <Label>Destination</Label>
        <Input type="text" placeholder="Destination" />
      </Section>

      <Button>Create</Button>
    </PageWrapper>
  );
};

export default JobCreationProcess;