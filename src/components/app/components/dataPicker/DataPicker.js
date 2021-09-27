import React, { Fragment, useState } from "react";

import moment from "moment";
import Calendar from "./Calendar";
import { Form_Input_DataPicker, Overflow__Form_Select,Overflow__Modal } from "../../demo/demoComponents";

const DataPicker = (props) => {
  const [calendarModal, toogle] = useState({
    open: false,
  });
  const openCalendar = () => {
    toogle({ open: true });
  };
  const closeCalendar = () => {
    toogle({ open: false });
  };
  const setData = (value) => {
    props.dataChange(value);
    closeCalendar();
  };

  return (
    <Fragment>
      <Form_Input_DataPicker
        onClick={openCalendar}
        half={props.half}
        left={props.left}
        right={props.right}
      >
        {moment(props.value).format("DD MMMM YYYY")}
      </Form_Input_DataPicker>
      {calendarModal.open && (
        <Overflow__Form_Select>
          <Overflow__Modal>
            <Calendar
              date={props.value}
              submit={setData}
              cancel={closeCalendar}
            />
          </Overflow__Modal>
        </Overflow__Form_Select>
      )}
    </Fragment>
  );
};

export default DataPicker;
