import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { App__Wrapper, Content__Area } from "./demo/demoComponents";
import Home from "./Home";

const Demo = () => {
  return (
    <App__Wrapper>
      <Content__Area>
        <Home />;
      </Content__Area>
    </App__Wrapper>
  );
};

export default Demo;
