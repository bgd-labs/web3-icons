// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatacbeth } from "../../../icons/full/build/icon-statacbeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatacbethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatacbeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatacbethIcon.displayName = 'StatacbethIcon';
}

export default StatacbethIcon;