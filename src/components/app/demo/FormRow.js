import React from "react";
import { Theme } from "../untils/Theme";
import styled from "styled-components";

const Form_Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  align-items: flex-start;
  margin-bottom: 1.6rem;
  color: ${Theme.form.font_color};
`;


const Content__Form_Row = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const FormRow = (props) => {
  return (
    <Form_Row>
      <Content__Form_Row>{props.children}</Content__Form_Row>
    </Form_Row>
  );
};

export default FormRow;
