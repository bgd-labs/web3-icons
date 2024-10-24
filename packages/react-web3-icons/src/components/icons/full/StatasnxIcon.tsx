// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasnx } from "../../../icons/full/build/icon-statasnx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatasnxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatasnx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasnxIcon.displayName = 'StatasnxIcon';
}

export default StatasnxIcon;