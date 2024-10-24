// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataftm } from "../../../icons/mono/build/icon-stataftm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataftmIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataftm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataftmIcon.displayName = 'StataftmIcon';
}

export default StataftmIcon;