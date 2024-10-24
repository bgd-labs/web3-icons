// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconMumbai } from "../../../icons/mono/build/icon-mumbai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const MumbaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconMumbai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MumbaiIcon.displayName = 'MumbaiIcon';
}

export default MumbaiIcon;