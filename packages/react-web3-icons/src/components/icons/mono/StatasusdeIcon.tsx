// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasusde } from "../../../icons/mono/build/icon-statasusde.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatasusdeIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatasusde.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasusdeIcon.displayName = 'StatasusdeIcon';
}

export default StatasusdeIcon;