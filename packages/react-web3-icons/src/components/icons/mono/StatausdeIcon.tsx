// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatausde } from "../../../icons/mono/build/icon-statausde.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatausdeIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatausde.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatausdeIcon.displayName = 'StatausdeIcon';
}

export default StatausdeIcon;