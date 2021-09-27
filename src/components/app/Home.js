import React, { Fragment, useState } from "react";

import Card from "./demo/Card";

import ContentHeader from "./demo/ContentHeader";
import FormRow from "./demo/FormRow";
import DataPicker from "./components/dataPicker/DataPicker";
import moment from "moment";
import Form__Time from "./demo/FormTime";
import { Content } from "./demo/demoComponents";

const Home = () => {
  const [dateNow, updateDate] = useState(moment().valueOf());
  const [timeValue, updateTime] = useState("12:35");

  const onDateChange = (value) => {
    updateDate(value);
  };

  const setTime = (value) => {
    updateTime(value);
  };

  return (
    <Content>
      <ContentHeader title="Time Picker by Lukasz Stasiak" />
      <Card title="Date Picker Demo">
        <FormRow>
          <DataPicker
            read={false}
            name="startDate"
            value={dateNow}
            dataChange={onDateChange}
          />
        </FormRow>
      </Card>
      <Card title="Time Picker Demo">
        <FormRow>
          <Form__Time value={timeValue} setTime={setTime} />
        </FormRow>
      </Card>
      )
    </Content>
  );
};

export default Home;
