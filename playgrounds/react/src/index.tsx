import React from "react";
import ReactDOM from "react-dom";

import { Margin } from "@ds.e/react";

import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/global.css";

ReactDOM.render(
  <div>
    <Margin left space="xl">
      <p>This is some dummy text</p>
    </Margin>
  </div>,
  document.querySelector("#root")
);
