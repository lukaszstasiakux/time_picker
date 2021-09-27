import React from "react";
import styled from "styled-components";
import { Theme } from "../../untils/Theme";

const Clock_Field = styled.div`
  position: relative;
`;

const Clock_Item = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: ${(p) =>
    p.selected
      ? Theme.timeSelector.dial_item_color_active
      : Theme.timeSelector.dial_item_color};
  position: absolute;
  left: ${(p) => p.left};
  top: ${(p) => p.top};
  background-color: ${(p) => (p.selected ? Theme.color.action : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  transition: 300ms;
  cursor: pointer;
  box-sizing: border-box;
  font-size: ${Theme.font.m_size};
  z-index: 20;
`;

const step = (2 * Math.PI) / 12;

class Dial extends React.Component {
  constructor(props) {
    super(props);
  }

  calcTop = (index) => {
    let top =
      13.7 + this.props.radius * Math.sin(-Math.PI / 2 + index * step) + "rem";
    return top;
  };
  calcLeft = (index) => {
    let left =
      13.7 + this.props.radius * Math.cos(-Math.PI / 2 + index * step) + "rem";
    return left;
  };
  calcRadius = () => {
    let rad = -90 + this.props.dataScope.indexOf(this.props.value) * 30;
    return rad;
  };
  onClick = (value) => {
    this.props.onClick(value);
  };

  render() {
    const { dataScope, value } = this.props;

    return (
      <Clock_Field>
        {dataScope.map((item, index) => (
          <Clock_Item
            left={(p) => this.calcLeft(index)}
            top={(p) => this.calcTop(index)}
            key={index}
            selected={item == value}
            onClick={(p) => this.onClick(item)}
          >
            {item}
          </Clock_Item>
        ))}
      </Clock_Field>
    );
  }
}

export default Dial;
