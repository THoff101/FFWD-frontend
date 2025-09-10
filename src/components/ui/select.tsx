"use client";

import * as React from "react";
import styled from "styled-components";
import * as SelectPrimitive from "@radix-ui/react-select@2.1.6";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react@0.487.0";

const StyledSelectTrigger = styled(SelectPrimitive.Trigger)<{ $size?: 'sm' | 'default' }>`
  border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 0.375rem;
  background-color: var(--input-background, #f3f3f5);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  white-space: nowrap;
  transition: color 0.2s, box-shadow 0.2s;
  outline: none;
  
  height: ${props => props.$size === 'sm' ? '2rem' : '2.25rem'};
  
  &[data-placeholder] {
    color: var(--muted-foreground, #717182);
  }
  
  svg:not([class*='text-']) {
    color: var(--muted-foreground, #717182);
  }
  
  &:focus-visible {
    border-color: var(--ring, #6b7280);
    box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.5);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &[aria-invalid="true"] {
    border-color: var(--destructive, #d4183d);
    box-shadow: 0 0 0 3px rgba(212, 24, 61, 0.2);
  }
  
  [data-slot="select-value"] {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  svg {
    pointer-events: none;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }
`;

const ChevronDown = styled(ChevronDownIcon)`
  width: 1rem;
  height: 1rem;
  opacity: 0.5;
`;

const StyledSelectContent = styled(SelectPrimitive.Content)<{ $position?: string }>`
  background-color: var(--popover, #ffffff);
  color: var(--popover-foreground, #111827);
  position: relative;
  z-index: 50;
  max-height: var(--radix-select-content-available-height);
  min-width: 8rem;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 0.375rem;
  border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05);
  
  &[data-state="open"] {
    animation: fadeIn 0.2s ease-out;
  }
  
  &[data-state="closed"] {
    animation: fadeOut 0.15s ease-in;
  }
  
  ${props => props.$position === 'popper' && `
    &[data-side="bottom"] {
      transform: translateY(1px);
    }
    
    &[data-side="left"] {
      transform: translateX(-1px);
    }
    
    &[data-side="right"] {
      transform: translateX(1px);
    }
    
    &[data-side="top"] {
      transform: translateY(-1px);
    }
  `}
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }
`;

const StyledSelectViewport = styled(SelectPrimitive.Viewport)<{ $position?: string }>`
  padding: 0.25rem;
  
  ${props => props.$position === 'popper' && `
    height: var(--radix-select-trigger-height);
    width: 100%;
    min-width: var(--radix-select-trigger-width);
  `}
`;

const StyledSelectLabel = styled(SelectPrimitive.Label)`
  color: var(--muted-foreground, #717182);
  padding: 0.375rem 0.5rem;
  font-size: 0.75rem;
`;

const StyledSelectItem = styled(SelectPrimitive.Item)`
  position: relative;
  display: flex;
  width: 100%;
  cursor: default;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.125rem;
  padding: 0.375rem 2rem 0.375rem 0.5rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;
  
  &:focus {
    background-color: var(--accent, #e9ebef);
    color: var(--accent-foreground, #030213);
  }
  
  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
  
  svg:not([class*='text-']) {
    color: var(--muted-foreground, #717182);
  }
  
  svg {
    pointer-events: none;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }
`;

const SelectItemIndicator = styled.span`
  position: absolute;
  right: 0.5rem;
  display: flex;
  width: 0.875rem;
  height: 0.875rem;
  align-items: center;
  justify-content: center;
`;

const CheckIconStyled = styled(CheckIcon)`
  width: 1rem;
  height: 1rem;
`;

const StyledSelectSeparator = styled(SelectPrimitive.Separator)`
  background-color: var(--border, rgba(0, 0, 0, 0.1));
  pointer-events: none;
  margin: 0.25rem -0.25rem;
  height: 1px;
`;

const StyledScrollButton = styled.div`
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
`;

const ChevronUp = styled(ChevronUpIcon)`
  width: 1rem;
  height: 1rem;
`;

const ChevronDownScroll = styled(ChevronDownIcon)`
  width: 1rem;
  height: 1rem;
`;

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  return (
    <StyledSelectTrigger
      data-slot="select-trigger"
      data-size={size}
      $size={size}
      className={className}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown />
      </SelectPrimitive.Icon>
    </StyledSelectTrigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <StyledSelectContent
        data-slot="select-content"
        $position={position}
        className={className}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <StyledSelectViewport $position={position}>
          {children}
        </StyledSelectViewport>
        <SelectScrollDownButton />
      </StyledSelectContent>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <StyledSelectLabel
      data-slot="select-label"
      className={className}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <StyledSelectItem
      data-slot="select-item"
      className={className}
      {...props}
    >
      <SelectItemIndicator>
        <SelectPrimitive.ItemIndicator>
          <CheckIconStyled />
        </SelectPrimitive.ItemIndicator>
      </SelectItemIndicator>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </StyledSelectItem>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <StyledSelectSeparator
      data-slot="select-separator"
      className={className}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      asChild
      {...props}
    >
      <StyledScrollButton className={className}>
        <ChevronUp />
      </StyledScrollButton>
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      asChild
      {...props}
    >
      <StyledScrollButton className={className}>
        <ChevronDownScroll />
      </StyledScrollButton>
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};