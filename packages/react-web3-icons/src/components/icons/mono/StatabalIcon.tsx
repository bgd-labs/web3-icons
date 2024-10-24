// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatabal } from "../../../icons/mono/build/icon-statabal.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatabalIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatabal.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatabalIcon.displayName = 'StatabalIcon';
}

export default StatabalIcon;