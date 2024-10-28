// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAsusd } from "../../../icons/full/build/icon-asusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AsusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAsusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsusdIcon.displayName = 'AsusdIcon';
}

export default AsusdIcon;