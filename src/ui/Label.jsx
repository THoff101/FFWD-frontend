import "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-weight: 500;
  margin-bottom: 0.25rem;
  display: block;
`;

export const Label = (props) => <StyledLabel {...props} />;
