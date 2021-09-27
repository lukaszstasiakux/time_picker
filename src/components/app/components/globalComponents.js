import { Theme } from "../untils/Theme";
import styled from "styled-components";






export const Icon__Button_Simple = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${(p) => (p.left ? "0.4rem" : "0")};
  font-size: ${Theme.font.l_size};
  color: ${(p) => (p.off ? Theme.color.disable : Theme.color.primary)};
  background-color: ${Theme.icons.icon_button_bg};
  &:hover {
    color: ${(p) => (p.off ? Theme.color.disable : Theme.color.action)};
    background-color: ${Theme.icons.icon_button_bg_hover};
    transition: 300ms;
  }
  transition: 300ms;
  cursor: pointer;
  height: 3.2rem;
  width: 3.2rem;
  line-height: ${Theme.font.l_size};
  box-sizing: border-box;
`;

export const Aligment = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${(p) => (p.direction ? p.direction : "row")};
  justify-content: ${(p) => (p.justify ? p.justify : "space-between")};
  align-items: ${(p) => (p.aling ? p.aling : "center")};
`;


