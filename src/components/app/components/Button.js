import React from "react";
import { Theme } from "../untils/Theme";
import styled from "styled-components";

const Wrapper_Button = styled.div`
  transition: 300ms;
  border-radius: 0.3rem;
  height: 4rem;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.justify ? p.justify : "center")};
  display: flex;
  background-color: ${Theme.buttons.negative_background};
  color: ${Theme.buttons.negative_color};
  &:hover {
    background-color: ${Theme.buttons.negative_background_hover};
    color: ${Theme.buttons.negative_color_hover};
  }
  cursor: pointer;
`;

const Label_Button = styled.div`
  font-size: ${Theme.font.m_size};
  padding: 0.8rem 1.6rem;
`;

const Button = ({
  onClick,
  label,

  justify,
}) => (
  <Wrapper_Button onClick={onClick} title={label} justify={justify}>
    <Label_Button>{label}</Label_Button>
  </Wrapper_Button>
);

export default Button;
