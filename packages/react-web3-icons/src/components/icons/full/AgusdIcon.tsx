// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAgusd } from "../../../icons/full/build/icon-agusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AgusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAgusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AgusdIcon.displayName = 'AgusdIcon';
}

export default AgusdIcon;