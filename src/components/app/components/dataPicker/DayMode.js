import React, { Fragment } from "react";
import styled from "styled-components";
import { Days } from "../../untils/OptionsScope";
import { Theme } from "../../untils/Theme";

const DaysLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
`;
const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const EmptyDay = styled.div`
  width: calc(100% / 7);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.calendar.empty_background_color};
`;
const HeadersLabel = styled.div`
  width: calc(100% / 7);
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DaysLabel = styled.div`
  width: calc(100% / 7);
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0.1rem solid ${Theme.calendar.border_color};
  color: ${(p) =>
    p.active ? Theme.calendar.active_color : Theme.calendar.normal_color};
  background-color: ${(p) =>
    p.active ? Theme.color.action : Theme.calendar.day_background_color};
`;

const DayMode = (props) => {
  const daysBeforeMonth = (counter) => {
    let days = [];
    for (let i = 1; i <= counter; i++) {
      days.push(<EmptyDay key={i}></EmptyDay>);
    }
    return days;
  };

  const daysInMonth = (counter) => {
    let days = [];
    for (let i = 1; i <= counter; i++) {
      days.push(
        <DaysLabel
          active={i === props.day}
          key={i}
          onClick={() => props.setDay(i)}
        >
          {i}
        </DaysLabel>
      );
    }
    return days;
  };

  return (
    <Fragment>
      <DaysLabelWrapper>
        {Days.map((day, index) => {
          return <HeadersLabel key={index}>{day.labelShort}</HeadersLabel>;
        })}
      </DaysLabelWrapper>
      <CalendarWrapper>
        {props.beforeMonth > 0 && daysBeforeMonth(props.beforeMonth)}
        {daysInMonth(props.howManyDays)}
      </CalendarWrapper>
    </Fragment>
  );
};

export default DayMode;
