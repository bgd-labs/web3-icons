// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAftm } from "../../../icons/full/build/icon-aftm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AftmIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAftm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AftmIcon.displayName = 'AftmIcon';
}

export default AftmIcon;