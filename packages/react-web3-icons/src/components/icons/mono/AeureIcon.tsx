// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAeure } from "../../../icons/mono/build/icon-aeure.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AeureIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAeure.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AeureIcon.displayName = 'AeureIcon';
}

export default AeureIcon;