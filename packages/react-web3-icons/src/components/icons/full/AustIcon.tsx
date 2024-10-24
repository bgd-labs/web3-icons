// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAust } from "../../../icons/full/build/icon-aust.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AustIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAust.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AustIcon.displayName = 'AustIcon';
}

export default AustIcon;