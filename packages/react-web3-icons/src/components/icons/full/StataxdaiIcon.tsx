// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataxdai } from "../../../icons/full/build/icon-stataxdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataxdaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataxdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataxdaiIcon.displayName = 'StataxdaiIcon';
}

export default StataxdaiIcon;