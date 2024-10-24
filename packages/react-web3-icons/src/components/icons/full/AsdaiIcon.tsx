// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAsdai } from "../../../icons/full/build/icon-asdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AsdaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAsdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsdaiIcon.displayName = 'AsdaiIcon';
}

export default AsdaiIcon;