// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawbnb } from "../../../icons/mono/build/icon-statawbnb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatawbnbIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatawbnb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawbnbIcon.displayName = 'StatawbnbIcon';
}

export default StatawbnbIcon;