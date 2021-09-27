import React from "react";
import styled from "styled-components";
import { Month } from "../../untils/OptionsScope";
import { Theme } from "../../untils/Theme";

const MonthItem = styled.div`
  width: calc(100% / 3);
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0.1rem solid ${Theme.calendar.border_color};
  color: ${(p) =>
    p.active ? Theme.calendar.active_color : Theme.calendar.normal_color};
  background-color: ${(p) =>
    p.active ? Theme.color.action : Theme.calendar.day_background_color};
`;
const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const MonthMode = (props) => {
  return (
    <CalendarWrapper>
      {Month.map((month, index) => {
        return (
          <MonthItem
            active={props.month === index}
            key={index}
            onClick={() => props.setMonth(index)}
          >
            {Month[index].label}
          </MonthItem>
        );
      })}
    </CalendarWrapper>
  );
};

export default MonthMode;
