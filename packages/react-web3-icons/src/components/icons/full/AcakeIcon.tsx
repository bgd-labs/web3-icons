// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAcake } from "../../../icons/full/build/icon-acake.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AcakeIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAcake.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AcakeIcon.displayName = 'AcakeIcon';
}

export default AcakeIcon;