// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataeure } from "../../../icons/mono/build/icon-stataeure.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataeureIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataeure.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataeureIcon.displayName = 'StataeureIcon';
}

export default StataeureIcon;