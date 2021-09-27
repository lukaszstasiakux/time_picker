import React from "react";
import { Theme } from "../untils/Theme";
import styled from "styled-components";

const Wrapper__Card_Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
  position: relative;
`;
const Title__Card_Header = styled.div`
  color: ${Theme.color.primary_active};
  font-size: ${Theme.font.m_size};
  line-height: ${Theme.font.m_size};
  font-weight: 300;
  display: flex;
  align-items: center;
  @media (max-width: 420px) {
    font-size: ${Theme.font.m_size};
    line-height: ${Theme.font.m_size};
  }
`;

const CardHeader = (props) => {
  return (
    <Wrapper__Card_Header>
      <Title__Card_Header>{props.title}</Title__Card_Header>
    </Wrapper__Card_Header>
  );
};

export default CardHeader;
