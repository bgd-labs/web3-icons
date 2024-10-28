// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAvalanche } from "../../../icons/mono/build/icon-avalanche.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AvalancheIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAvalanche.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AvalancheIcon.displayName = 'AvalancheIcon';
}

export default AvalancheIcon;