// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasd } from "../../../icons/mono/build/icon-statasd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatasdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatasd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasdIcon.displayName = 'StatasdIcon';
}

export default StatasdIcon;