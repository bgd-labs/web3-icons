// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAusdc } from "../../../icons/full/build/icon-ausdc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AusdcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAusdc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AusdcIcon.displayName = 'AusdcIcon';
}

export default AusdcIcon;