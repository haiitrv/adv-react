import React from "react";
import ReactDOM from "react-dom";

import { Select } from "@ds.e/react";

import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/Select.css";
import "@ds.e/scss/lib/global.css";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

ReactDOM.render(
  <div style={{ padding: "40px" }}>
    <Select
      options={options}
      renderOption={({ option, getOptionRecommendedProps }) => (
        <p {...getOptionRecommendedProps()}>{option.label}</p>
      )}
    />
  </div>,
  document.querySelector("#root")
);
