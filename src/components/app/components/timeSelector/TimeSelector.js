import React, { useState } from "react";
import Hour_Card from "./HourCard";
import Minutes_Card from "./MinutesCard";
import { Aligment } from "../globalComponents";

import Button from "../Button";
import { Element__Modal_Header,Small_Modal_Footer,Small_Modal_Content,Small_Modal_Header } from "../../demo/demoComponents";

const Time_Selector = (props) => {
  const [mode, toogleMode] = useState("hour");
  const [value, changeValue] = useState({
    hour: props.hour,
    minutes: props.minutes,
  });

  const setFocus = (fieldValue) => {
    if (mode != fieldValue) {
      toogleMode(fieldValue);
    }
  };

  const setHour = (hour) => {
    changeValue({
      ...value,
      hour: hour,
    });
  };
  const setMinutes = (minutes) => {
    changeValue({
      ...value,
      minutes: minutes,
    });
  };

  const changeDayTime = (hour) => {
    changeValue({
      ...value,
      hour: hour,
    });
  };
  const submit = () => {
    props.onSet(value.hour, value.minutes);
  };

  return (
    <Aligment direction="column">
      <Small_Modal_Header>
        <Element__Modal_Header
          active={mode === "hour"}
          onClick={(p) => setFocus("hour")}
        >
          {value.hour}
        </Element__Modal_Header>{" "}
        :
        <Element__Modal_Header
          active={mode === "minutes"}
          onClick={(p) => setFocus("minutes")}
        >
          {value.minutes}
        </Element__Modal_Header>
      </Small_Modal_Header>

      <Small_Modal_Content>
        {mode === "hour" ? (
          <Hour_Card
            value={value.hour}
            onClick={setHour}
            changeDayTime={changeDayTime}
          />
        ) : (
          <Minutes_Card value={value.minutes} onClick={setMinutes} />
        )}
      </Small_Modal_Content>
      <Small_Modal_Footer>
        <Aligment justify="space-between">
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

export default Time_Selector;
