// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatacake } from "../../../icons/mono/build/icon-statacake.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatacakeIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatacake.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatacakeIcon.displayName = 'StatacakeIcon';
}

export default StatacakeIcon;