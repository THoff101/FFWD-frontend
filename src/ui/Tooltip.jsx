import "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import styled from "styled-components";

const Content = styled(TooltipPrimitive.Content)`
  background: var(--card);
  color: var(--card-foreground);
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius);
  font-size: 0.875rem;
`;

export const Tooltip = ({ trigger, content }) => (
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>
        {trigger}
      </TooltipPrimitive.Trigger>
      <Content>{content}</Content>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);

