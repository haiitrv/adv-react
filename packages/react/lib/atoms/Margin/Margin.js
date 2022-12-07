import React from 'react';

const Margin = ({ space = "xxxs", children, left, right, top, bottom, }) => {
    let className = ``;
    if (!left && !right && !top && !bottom) {
        className = `dse-margin-${space}`;
    }
    if (left) {
        className = `dse-margin-left-${space}`;
    }
    if (right) {
        className = `dse-margin-right-${space}`;
    }
    if (top) {
        className = `dse-margin-top-${space}`;
    }
    if (bottom) {
        className = `dse-margin-bottom-${space}`;
    }
    return React.createElement("div", { className: className }, children);
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
