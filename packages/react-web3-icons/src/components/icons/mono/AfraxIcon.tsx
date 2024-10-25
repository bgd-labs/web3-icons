// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAfrax } from "../../../icons/mono/build/icon-afrax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AfraxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAfrax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AfraxIcon.displayName = 'AfraxIcon';
}

export default AfraxIcon;