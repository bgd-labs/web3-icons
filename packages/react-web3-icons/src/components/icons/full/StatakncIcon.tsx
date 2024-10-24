// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataknc } from "../../../icons/full/build/icon-stataknc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatakncIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataknc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatakncIcon.displayName = 'StatakncIcon';
}

export default StatakncIcon;