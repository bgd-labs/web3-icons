// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAfdusd } from "../../../icons/mono/build/icon-afdusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AfdusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAfdusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AfdusdIcon.displayName = 'AfdusdIcon';
}

export default AfdusdIcon;