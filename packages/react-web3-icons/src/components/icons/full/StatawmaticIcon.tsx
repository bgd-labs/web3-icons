// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawmatic } from "../../../icons/full/build/icon-statawmatic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatawmaticIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatawmatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawmaticIcon.displayName = 'StatawmaticIcon';
}

export default StatawmaticIcon;