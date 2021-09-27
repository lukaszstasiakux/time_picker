import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import Demo from "./components/app/Demo";

const App = () => {
  return (
    <Fragment>
      <Demo />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
