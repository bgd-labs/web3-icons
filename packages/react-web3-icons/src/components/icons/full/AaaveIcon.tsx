// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAaave } from "../../../icons/full/build/icon-aaave.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AaaveIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAaave.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AaaveIcon.displayName = 'AaaveIcon';
}

export default AaaveIcon;