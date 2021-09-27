import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { Theme } from "../../untils/Theme";
import { Icon__Button_Simple } from "../globalComponents";

const CalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const YearWrapper = styled.div`
  width: 100%;
  display: flex;
  height: calc(100% - 7.6rem);
  overflow: hidden;
  flex-wrap: wrap;
  position: relative;
`;

const SectionYear = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  transition: 500ms;
  position: absolute;
  transform: ${(p) =>
    p.active
      ? "translateY(0)"
      : (p) => (p.before ? "translateY(-100%)" : "translateY(100%)")};
`;

const IconWrapper = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const YearItem = styled.div`
  width: calc(100% / 4);
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

const YearMode = (props) => {
  const currentYear = moment().year();
  const yearPerPage = 20;
  const yearAfter = props.yearAfter ? props.yearAfter : 10;
  const yearBefore = props.yearBefore ? props.yearBefore : 90;

  const setActiveSection = () => {
    return parseInt(
      (props.year - (currentYear - yearBefore)) / yearPerPage + 1
    );
  };
  const setMaxSection = () => {
    return (currentYear + yearAfter - (currentYear - yearBefore)) / yearPerPage;
  };

  const [activeSection, changeSection] = useState(setActiveSection());
  const [maxSection] = useState(setMaxSection());

  const prevSection = () => {
    if (activeSection > 1) {
      changeSection(activeSection - 1);
    }
  };

  const nextSection = () => {
    if (activeSection < maxSection) {
      changeSection(activeSection + 1);
    }
  };

  const generateSection = (startYear) => {
    let years = [];
    for (let i = startYear; i <= startYear + (yearPerPage + 1); i++) {
      years.push(
        <YearItem
          active={i === props.year}
          key={i}
          onClick={() => props.setYear(i)}
        >
          {i}
        </YearItem>
      );
    }
    return years;
  };

  const showYear = () => {
    let startYear = moment().year() - yearBefore;
    let section = [];
    for (let i = 1; i <= maxSection; i++) {
      section.push(
        <SectionYear
          active={i == activeSection}
          before={i < activeSection}
          key={i}
        >
          {generateSection(startYear)}
        </SectionYear>
      );
      startYear = startYear + yearPerPage;
    }
    return section;
  };

  return (
    <CalendarWrapper>
      <IconWrapper>
        <Icon__Button_Simple onClick={prevSection} off={activeSection == 1}>
          <i className="material-icons"> keyboard_arrow_up</i>
        </Icon__Button_Simple>
      </IconWrapper>
      <YearWrapper>{showYear()}</YearWrapper>
      <IconWrapper>
        <Icon__Button_Simple
          onClick={nextSection}
          off={activeSection == maxSection}
        >
          <i className="material-icons"> keyboard_arrow_down</i>
        </Icon__Button_Simple>
      </IconWrapper>
    </CalendarWrapper>
  );
};

export default YearMode;
