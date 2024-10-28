// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconGusd } from "../../../icons/full/build/icon-gusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const GusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconGusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GusdIcon.displayName = 'GusdIcon';
}

export default GusdIcon;