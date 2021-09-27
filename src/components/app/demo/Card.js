import React from "react";
import { Theme } from "../untils/Theme";
import styled from "styled-components";
import CardHeader from "./CardHeader";

export const Card__Wrapper = styled.div`
  padding: 1.6rem;
  display: inline-block;
  width: 100%;
`;

export const Card__Element = styled.div`
  background-color: ${Theme.card.background_color};
  border-radius: 0.3rem;
  padding: 1.6rem;
  width: 100%;
  font-size: ${Theme.font.m_size};
  display: flex;
  flex-direction: column;
`;

export const Card__Content = styled.div`
  font-weight: 400;
`;


const Card = (props) => {
  const { title, children } = props;
  return (
    <Card__Wrapper>
      <Card__Element>
        {title && <CardHeader title={title} />}
        <Card__Content>{children}</Card__Content>
      </Card__Element>
    </Card__Wrapper>
  );
};

export default Card;
