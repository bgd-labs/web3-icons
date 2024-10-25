// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasdai } from "../../../icons/mono/build/icon-statasdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatasdaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatasdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasdaiIcon.displayName = 'StatasdaiIcon';
}

export default StatasdaiIcon;