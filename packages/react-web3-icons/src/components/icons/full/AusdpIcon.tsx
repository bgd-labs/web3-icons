// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAusdp } from "../../../icons/full/build/icon-ausdp.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AusdpIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAusdp.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AusdpIcon.displayName = 'AusdpIcon';
}

export default AusdpIcon;