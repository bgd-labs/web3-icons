// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStmatic } from "../../../icons/mono/build/icon-stmatic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StmaticIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStmatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StmaticIcon.displayName = 'StmaticIcon';
}

export default StmaticIcon;