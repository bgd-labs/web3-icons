// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawbeth } from "../../../icons/mono/build/icon-statawbeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatawbethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatawbeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawbethIcon.displayName = 'StatawbethIcon';
}

export default StatawbethIcon;