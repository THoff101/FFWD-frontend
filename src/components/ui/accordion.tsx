"use client";

import * as React from "react";
import styled from "styled-components";
import * as AccordionPrimitive from "@radix-ui/react-accordion@1.2.3";
import { ChevronDownIcon } from "lucide-react@0.487.0";

const StyledAccordionItem = styled(AccordionPrimitive.Item)`
  border-bottom: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  
  &:last-child {
    border-bottom: 0;
  }
`;

const AccordionHeader = styled(AccordionPrimitive.Header)`
  display: flex;
`;

const StyledAccordionTrigger = styled(AccordionPrimitive.Trigger)`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 0.375rem;
  padding: 1rem 0;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  outline: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:focus-visible {
    border-color: var(--ring, #6b7280);
    box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.5);
  }
  
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  
  &[data-state="open"] svg {
    transform: rotate(180deg);
  }
`;

const ChevronDown = styled(ChevronDownIcon)`
  color: var(--muted-foreground, #717182);
  pointer-events: none;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  transform: translateY(2px);
  transition: transform 200ms;
`;

const StyledAccordionContent = styled(AccordionPrimitive.Content)`
  overflow: hidden;
  font-size: 0.875rem;
  
  &[data-state="closed"] {
    animation: accordion-up 0.2s ease-out;
  }
  
  &[data-state="open"] {
    animation: accordion-down 0.2s ease-out;
  }
  
  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }
  
  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
`;

const AccordionContentInner = styled.div`
  padding-top: 0;
  padding-bottom: 1rem;
`;

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <StyledAccordionItem
      data-slot="accordion-item"
      className={className}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionHeader>
      <StyledAccordionTrigger
        data-slot="accordion-trigger"
        className={className}
        {...props}
      >
        {children}
        <ChevronDown />
      </StyledAccordionTrigger>
    </AccordionHeader>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <StyledAccordionContent
      data-slot="accordion-content"
      {...props}
    >
      <AccordionContentInner className={className}>{children}</AccordionContentInner>
    </StyledAccordionContent>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };