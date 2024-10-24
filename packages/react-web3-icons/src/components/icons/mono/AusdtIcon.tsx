// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAusdt } from "../../../icons/mono/build/icon-ausdt.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AusdtIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAusdt.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AusdtIcon.displayName = 'AusdtIcon';
}

export default AusdtIcon;