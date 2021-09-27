import React, { useState } from "react";
import styled from "styled-components";
import { Theme } from "../../untils/Theme";
import Dial from "./Dial";

const hoursPrimary = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
];
const hoursSecondary = [
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];

const Dial_Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${Theme.timeSelector.dial_background};
  border-radius: 50%;
  box-sizing: border-box;
`;

const Switch_Time = styled.div`
  position: absolute;
  width: 8rem;
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 11.65rem;
  top: 13.84rem;
  border: 0.1rem solid ${Theme.color.action};
  background-color: ${Theme.timeSelector.switch_backgorund_color};
  border-radius: 0.4rem;
  overflow: hidden;
  transition: 300ms;
  &:before {
    content: "";
    height: 3.6rem;
    width: 50%;
    position: absolute;
    top: 0;
    left: ${(p) => (p.activeMode == 0 ? 0 : "")};
    transition: 300ms;
    background-color: ${Theme.color.action};
    transform: ${(p) =>
      p.activeMode == 0 ? "translateX(0)" : "translateX(51%)"};
  }
`;

const Switch_Item = styled.div`
  width: 50%;
  height: 3.6rem;
  display: flex;
  position: relative;
  z-index: 11;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(p) =>
    p.active
      ? Theme.timeSelector.switch_color_active
      : Theme.timeSelector.switch_color};
  transition: 300ms;
`;

const Hour_Card = (props) => {
  const detectMode = () => {
    if (hoursPrimary.indexOf(props.value) != -1) {
      return 0;
    }
    return 1;
  };
  const [mode, changeMode] = useState(detectMode);

  const onClick = (value) => {
    props.onClick(value);
  };

  const changeSwitch = (value) => {
    let newHour = 0;
    if (value == 0 && value != mode) {
      newHour = parseInt(props.value) - 12;
    } else if (value == 1 && value != mode) {
      newHour = parseInt(props.value) + 12;
    } else {
      return false;
    }
    props.changeDayTime(newHour);
    changeMode(value);
  };
  return (
    <Dial_Wrapper>
      <Dial
        radius={12.3}
        dataScope={mode == 0 ? hoursPrimary : hoursSecondary}
        value={props.value}
        onClick={onClick}
      />
      <Switch_Time activeMode={mode}>
        <Switch_Item active={mode == 0} onClick={() => changeSwitch(0)}>
          AM
        </Switch_Item>
        <Switch_Item active={mode == 1} onClick={() => changeSwitch(1)}>
          PM
        </Switch_Item>
      </Switch_Time>
    </Dial_Wrapper>
  );
};

export default Hour_Card;
