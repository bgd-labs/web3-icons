// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatacrv } from "../../../icons/full/build/icon-statacrv.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatacrvIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatacrv.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatacrvIcon.displayName = 'StatacrvIcon';
}

export default StatacrvIcon;