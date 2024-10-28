// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAcrvusd } from "../../../icons/mono/build/icon-acrvusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AcrvusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAcrvusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AcrvusdIcon.displayName = 'AcrvusdIcon';
}

export default AcrvusdIcon;