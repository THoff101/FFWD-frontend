import "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const Box = styled.div`
  background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.2s infinite;
  border-radius: var(--radius);
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "1rem"};
`;

export const Skeleton = (props) => <Box {...props} />;

