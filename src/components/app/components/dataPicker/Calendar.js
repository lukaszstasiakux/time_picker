import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { Aligment } from "../globalComponents";

import { Icon__Button_Simple } from "../globalComponents";
import { Month } from "../../untils/OptionsScope";
import DayMode from "./DayMode";
import MonthMode from "./MonthMode";
import YearMode from "./YearMode";
import Button from "../Button";
import { Small_Modal_Header,Small_Modal_Header_Content,Small_Modal_Footer,Small_Modal_Content,Element__Modal_Header } from "../../demo/demoComponents";

const DayModeSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const Calendar = (props) => {
  const [data, changeData] = useState({
    value: props.date,
    setMonth: moment(props.date).month(),
    setYear: moment(props.date).year(),
    setDay: moment(props.date).date(),
    showMonth: moment(props.date).month(),
    showYear: moment(props.date).year(),
  });

  const [mode, changeMode] = useState("days");

  const calculateDayInMount = (year, month) => {
    return moment(year + "-" + month, "YYYY-MM").daysInMonth();
  };
  const calculateDaysBeforeMonth = (year, month) => {
    return moment(year + "-" + month + "-01", "YYYY-MM-DD").isoWeekday() - 1;
  };

  const setShowData = (month, year,day) => {
    changeData({
      ...data,
      setDay: day,
      showMonth: month,
      showYear: year,
    });
  };
  const setMonth = (value) => {
    changeData({
      ...data,
      showMonth: value,
    });
    changeMode("days");
  };

  const setYear = (value) => {
    changeData({
      ...data,
      showYear: value,
    });
    changeMode("days");
  };

  const setDay = (value) => {
    changeData({
      ...data,
      setDay: value,
      setMonth: data.showMonth,
      setYear: data.showYear,
    });
  };

  const changeMonth = (direction) => {
    let month = data.showMonth;
    let year = data.showYear;
    let day = data.setDay;

    if(direction==='prev'){
      if (data.showMonth == 0) {
        month = 11;
        year = year - 1;
      } else {
        month = month - 1;
      }
    } else {
      if (data.showMonth == 11) {
        month = 0;
        year = year + 1;
      } else {
        month = month + 1;
      }
    }
    const days = calculateDayInMount(year,month+1)
   if(day> days ){
     day = days
   }
    setShowData(month, year,day);
  };



  const submit = () => {
    props.submit(
      moment(
        data.showYear + "-" + (data.showMonth + 1) + "-" + data.setDay,
        "YYYY-MM-DD"
      ).valueOf()
    );
  };

  return (
    <Aligment direction="column">
      <Small_Modal_Header>
        {mode === "days" && (
          <Icon__Button_Simple onClick={()=>changeMonth('prev')}>
            <i className="material-icons"> keyboard_arrow_left</i>
          </Icon__Button_Simple>
        )}
        <Small_Modal_Header_Content>
          <Element__Modal_Header
            active={mode === "month"}
            onClick={() => changeMode("month")}
          >
            {Month[data.showMonth].label}
          </Element__Modal_Header>
          <Element__Modal_Header
            active={mode === "year"}
            onClick={() => changeMode("year")}
          >
            {data.showYear}
          </Element__Modal_Header>
        </Small_Modal_Header_Content>
        {mode === "days" && (
          <Icon__Button_Simple onClick={()=>changeMonth('next')}>
            <i className="material-icons"> keyboard_arrow_right</i>
          </Icon__Button_Simple>
        )}
      </Small_Modal_Header>
      <Small_Modal_Content>
        {mode === "days" && (
          <DayModeSection>
            <DayMode
              date={data.value}
              howManyDays={calculateDayInMount(
                data.showYear,
                data.showMonth + 1
              )}
              beforeMonth={calculateDaysBeforeMonth(
                data.showYear,
                data.showMonth + 1
              )}
              setDay={setDay}
              day={data.setDay}
            />
          </DayModeSection>
        )}
        {mode === "month" && (
          <MonthMode month={data.showMonth} setMonth={setMonth} />
        )}
        {mode === "year" && <YearMode year={data.showYear} setYear={setYear} />}
      </Small_Modal_Content>
      <Small_Modal_Footer>
        <Aligment>
          <Button
            onClick={props.cancel}
            label='Cancel'

          />
          <Button
            onClick={submit}
            label='Confirm'
          />
        </Aligment>
      </Small_Modal_Footer>
    </Aligment>
  );
};

export default Calendar;
