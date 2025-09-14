import "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import styled from "styled-components";

const Root = styled(ProgressPrimitive.Root)`
  background: var(--muted);
  border-radius: var(--radius);
  overflow: hidden;
  height: 8px;
  width: 100%;
`;

const Indicator = styled(ProgressPrimitive.Indicator)`
  background: var(--primary);
  height: 100%;
  transition: width 0.3s ease;
`;

export const Progress = ({ value }) => (
  <Root>
    <Indicator style={{ width: `${value}%` }} />
  </Root>
);

