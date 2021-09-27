import React from "react";
import { Form_Time, Overflow__Form_Select, Overflow__Modal, Wrapper__Form_Select } from "./demoComponents";

import Time_Selector from "../components/timeSelector/TimeSelector";

class Form__Time extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    open: false,
  };

  openOptionsBox = () => {
    if (!this.state.open) {
      this.setState({
        open: true,
      });
    }
  };

  closeOptionsBox = () => {
    if (this.state.open) {
      this.setState({
        open: false,
      });
    }
  };
  setTime = (hour, minutes) => {
    this.props.setTime(hour + ":" + minutes);
    this.closeOptionsBox();
  };
  stopPropagation = (event) => {
    event.stopPropagation();
  };

  render() {
    const { open } = this.state;
    const {value } = this.props;
    const hour = value.split(":")[0];
    const minutes = value.split(":")[1];

    return (
      <Wrapper__Form_Select>

          <Form_Time open={open} onClick={this.openOptionsBox}>
            {hour}:{minutes}
          </Form_Time>

        {open && (
          <Overflow__Form_Select>
            <Overflow__Modal onClick={this.stopPropagation}>
              <Time_Selector
                hour={hour}
                minutes={minutes}
                onSet={this.setTime}
                cancel={this.closeOptionsBox}
              />
            </Overflow__Modal>
          </Overflow__Form_Select>
        )}
      </Wrapper__Form_Select>
    );
  }
}

export default Form__Time;
