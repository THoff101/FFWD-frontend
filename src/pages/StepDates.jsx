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

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 1rem;
`;

const StepDates = () => {
  return (
    <Wrapper>
      <Title>Step: Key Dates</Title>
      <Label>Estimated Departure Date</Label>
      <Input type="date" />
      <Label>Estimated Arrival Date</Label>
      <Input type="date" />
    </Wrapper>
  );
};

export default StepDates;