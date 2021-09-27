import { Theme } from "../untils/Theme";
import styled from "styled-components";

export const App__Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  font-size: 1.6rem;
  position: relative;
  background-color: ${Theme.global_layout.content_background};
`;

export const Content__Area = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
`;

export const Form_Input_DataPicker = styled.div`
  font-size: ${Theme.font.m_size};
  line-height: ${Theme.font.m_size};
  font-family: "Lato", sans-serif;
  height: 4rem;
  padding: 0 0.8rem;
  outline: none;
  color: ${Theme.form.input_color};
  border-radius: 0rem;
  position: relative;
  border: 1px solid ${Theme.form.input_border};
  transition: 300ms;
  overflow: hidden;
  background-color: ${Theme.form.input_background};
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
`;

export const Wrapper__Form_Select = styled.div`
  box-sizing: border-box;
  font-size: ${Theme.font.m_size};
  border: none;
  outline: none;
  color: ${Theme.form.input_color};
  width: 100%;
  border-radius: 0rem;
  position: ${(p) => (p.inModal ? "static" : "relative")};
  transition: 300ms;
  height: 4rem;
  margin-left: 0;
  margin-right: 0;
  display: inline-block;
  width: 100%;
`;

export const Overflow__Form_Select = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Theme.form.select_overlayer};
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Overflow__Modal = styled.div`
  width: 100%;
  max-width: 34.5rem;
  max-height: 100%;
  overflow: auto;
  background-color: ${Theme.form.ovelayer_modal_backgorund};
`;

export const Form_Time = styled.div`
  box-sizing: border-box;
  font-size: ${Theme.font.m_size};
  line-height: 2rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: ${Theme.form.input_color};
  width: 100%;
  border-radius: 0.2rem;
  position: relative;
  transition: 300ms;
  border: 1px solid
    ${(p) => (p.open ? Theme.color.action : Theme.form.input_border)};
  background-color: ${(p) =>
    p.open ? Theme.form.input_background_focus : Theme.form.input_background};
  display: inline-block;
  cursor: pointer;
`;

export const Small_Modal_Header = styled.div`
  font-size: ${Theme.font.l_size};
  padding: 1.6rem 0.8rem 0rem 0.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Small_Modal_Header_Content = styled.div`
  width: calc(100% - 6.4rem);
  display: flex;
  min-height: 3.2rem;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const Element__Modal_Header = styled.span`
  color: ${(p) =>
    p.active ? Theme.color.action : Theme.timeSelector.header_color};
  cursor: pointer;
  text-transform: capitalize;
  font-size: ${Theme.font.l_size};
  padding: 0.8rem;
  background-color: ${Theme.timeSelector.dial_background};
  font-weight: 300;
	cursor: pointer;
  &:first-child {
    margin-right: 0.4rem;
  }
  &:last-child {
    margin-left: 0.4rem;
  }
`;

export const Small_Modal_Content = styled.div`
  position: relative;
  height: 34.5rem;
  width: 34.5rem;
  padding: 1.6rem;
  box-sizing: border-box;
`;

export const Small_Modal_Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0rem 2rem;
  position: relative;
  width: 100%;
  height: 6.1rem;
  min-height: 6.1rem;
`;