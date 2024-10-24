// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatamkr } from "../../../icons/full/build/icon-statamkr.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatamkrIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatamkr.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatamkrIcon.displayName = 'StatamkrIcon';
}

export default StatamkrIcon;