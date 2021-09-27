import React from "react";
import { Theme } from "../untils/Theme";
import styled from "styled-components";

const Wrapper__Content_Header = styled.div`
  padding: 0px;
  width: 100%;
  margin: 0;
  background-color: ${Theme.card.background_color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  z-index: 20;
  position: fixed;
  height: 4rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
const Content_Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  padding: 0;
  width: 100%;
`;


const ContentHeader = (props) => {
  return (
    <Wrapper__Content_Header>
      <Content_Header>
        {props.title}
      </Content_Header>
    </Wrapper__Content_Header>
  );
};

export default ContentHeader;
