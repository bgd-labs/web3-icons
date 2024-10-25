// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatastkaave } from "../../../icons/full/build/icon-statastkaave.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatastkaaveIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatastkaave.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatastkaaveIcon.displayName = 'StatastkaaveIcon';
}

export default StatastkaaveIcon;