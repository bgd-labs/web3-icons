// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAavax } from "../../../icons/mono/build/icon-aavax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AavaxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAavax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AavaxIcon.displayName = 'AavaxIcon';
}

export default AavaxIcon;