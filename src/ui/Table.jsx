import "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const Th = styled.th`
  text-align: left;
  padding: 0.75rem;
  border-bottom: 1px solid var(--border);
  font-weight: 600;
`;

const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid var(--border);
`;

const Table = StyledTable;
const TableHead = Th;
const TableCell = Td;
const TableRow = styled.tr``;
const TableHeader = styled.thead``;
const TableBody = styled.tbody``;
export {Table, TableHead, TableCell, TableRow, TableHeader, TableBody}
