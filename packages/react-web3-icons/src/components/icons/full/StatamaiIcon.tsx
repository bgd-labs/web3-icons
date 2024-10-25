// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatamai } from "../../../icons/full/build/icon-statamai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatamaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatamai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatamaiIcon.displayName = 'StatamaiIcon';
}

export default StatamaiIcon;