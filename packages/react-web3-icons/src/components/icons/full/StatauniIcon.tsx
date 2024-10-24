// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatauni } from "../../../icons/full/build/icon-statauni.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatauniIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatauni.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatauniIcon.displayName = 'StatauniIcon';
}

export default StatauniIcon;