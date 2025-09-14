import "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"; // ensure this CSS is available
import styled from "styled-components";

const Wrapper = styled.div`
  .rdp {
    --rdp-cell-size: 40px;
    --rdp-accent-color: var(--primary);
    --rdp-background-color: var(--card);
    margin: 0;
  }

  .rdp-day_selected {
    background: var(--primary);
    color: var(--primary-foreground);
  }
`;

export const Calendar = ({ selected, onSelect }) => {
  return (
    <Wrapper>
      <DayPicker mode="single" selected={selected} onSelect={onSelect} />
    </Wrapper>
  );
};

