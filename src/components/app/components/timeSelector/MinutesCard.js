import React from "react";
import styled from "styled-components";
import { Theme } from "../../untils/Theme";
import Dial from "./Dial";

const minutesPrimary = [
  "00",
  "05",
  "10",
  "15",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
];

const Dial_Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${Theme.timeSelector.dial_background};
  border-radius: 50%;
  box-sizing: border-box;
`;
class Minutes_Card extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = (value) => {
    this.props.onClick(value);
  };

  render() {
    const { value } = this.props;
    return (
      <Dial_Wrapper>
        <Dial
          radius={12.3}
          dataScope={minutesPrimary}
          value={value}
          onClick={this.onClick}
        />
      </Dial_Wrapper>
    );
  }
}

export default Minutes_Card;
