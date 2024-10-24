// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawone } from "../../../icons/mono/build/icon-statawone.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatawoneIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatawone.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawoneIcon.displayName = 'StatawoneIcon';
}

export default StatawoneIcon;