import "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1rem 0;
`;

const Step = styled.div`
  margin-bottom: 0.5rem;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  color: ${({ active }) => (active ? "var(--primary)" : "var(--muted-foreground)")};
`;

const ProcessProgress = ({ steps, currentStep }) => {
  return (
    <Wrapper>
      {steps.map((step, index) => (
        <Step key={index} active={index === currentStep}>
          {step}
        </Step>
      ))}
    </Wrapper>
  );
};

export default ProcessProgress;