import "react";
import styled from "styled-components";
import { mockJobs } from "../data/jobs";

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

const IndividualJobDetailsPage = () => {
  const job = mockJobs[1];

  return (
    <PageWrapper>
      <Title>Individual Job Details: {job.title}</Title>
      <Section>
        <p><strong>Client:</strong> {job.client}</p>
        <p><strong>Origin:</strong> {job.origin}</p>
        <p><strong>Destination:</strong> {job.destination}</p>
        <p><strong>Status:</strong> {job.status}</p>
      </Section>
    </PageWrapper>
  );
};

export default IndividualJobDetailsPage;