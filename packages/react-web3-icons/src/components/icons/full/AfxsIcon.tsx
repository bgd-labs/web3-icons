// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAfxs } from "../../../icons/full/build/icon-afxs.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AfxsIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAfxs.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AfxsIcon.displayName = 'AfxsIcon';
}

export default AfxsIcon;