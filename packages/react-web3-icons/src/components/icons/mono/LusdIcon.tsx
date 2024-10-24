// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconLusd } from "../../../icons/mono/build/icon-lusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const LusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconLusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LusdIcon.displayName = 'LusdIcon';
}

export default LusdIcon;