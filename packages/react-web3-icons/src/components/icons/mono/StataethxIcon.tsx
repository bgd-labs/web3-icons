// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataethx } from "../../../icons/mono/build/icon-stataethx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataethxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataethx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataethxIcon.displayName = 'StataethxIcon';
}

export default StataethxIcon;