"use client";

import * as React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  position: relative;
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  caption-side: bottom;
  font-size: 0.875rem;
`;

const StyledTableHeader = styled.thead`
  tr {
    border-bottom: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  }
`;

const StyledTableBody = styled.tbody`
  tr:last-child {
    border-bottom: 0;
  }
`;

const StyledTableFooter = styled.tfoot`
  background-color: rgba(var(--muted-rgb, 236, 236, 240), 0.5);
  border-top: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  font-weight: 500;
  
  tr:last-child {
    border-bottom: 0;
  }
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(var(--muted-rgb, 236, 236, 240), 0.5);
  }
  
  &[data-state="selected"] {
    background-color: var(--muted, #ececf0);
  }
`;

const StyledTableHead = styled.th`
  color: var(--foreground, #111827);
  height: 2.5rem;
  padding: 0 0.5rem;
  text-align: left;
  vertical-align: middle;
  font-weight: 500;
  white-space: nowrap;
  
  &:has([role="checkbox"]) {
    padding-right: 0;
  }
  
  [role="checkbox"] {
    transform: translateY(2px);
  }
`;

const StyledTableCell = styled.td`
  padding: 0.5rem;
  vertical-align: middle;
  white-space: nowrap;
  
  &:has([role="checkbox"]) {
    padding-right: 0;
  }
  
  [role="checkbox"] {
    transform: translateY(2px);
  }
`;

const StyledTableCaption = styled.caption`
  color: var(--muted-foreground, #717182);
  margin-top: 1rem;
  font-size: 0.875rem;
`;

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <TableContainer data-slot="table-container">
      <StyledTable
        data-slot="table"
        className={className}
        {...props}
      />
    </TableContainer>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <StyledTableHeader
      data-slot="table-header"
      className={className}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <StyledTableBody
      data-slot="table-body"
      className={className}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <StyledTableFooter
      data-slot="table-footer"
      className={className}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <StyledTableRow
      data-slot="table-row"
      className={className}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <StyledTableHead
      data-slot="table-head"
      className={className}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <StyledTableCell
      data-slot="table-cell"
      className={className}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <StyledTableCaption
      data-slot="table-caption"
      className={className}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};