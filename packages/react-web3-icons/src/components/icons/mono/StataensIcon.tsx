// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataens } from "../../../icons/mono/build/icon-stataens.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataensIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataens.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataensIcon.displayName = 'StataensIcon';
}

export default StataensIcon;