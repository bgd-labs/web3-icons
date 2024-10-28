// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawsteth } from "../../../icons/mono/build/icon-statawsteth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatawstethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatawsteth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawstethIcon.displayName = 'StatawstethIcon';
}

export default StatawstethIcon;