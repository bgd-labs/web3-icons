// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawxdai } from "../../../icons/mono/build/icon-statawxdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatawxdaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatawxdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawxdaiIcon.displayName = 'StatawxdaiIcon';
}

export default StatawxdaiIcon;