// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAweeth } from "../../../icons/mono/build/icon-aweeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AweethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAweeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AweethIcon.displayName = 'AweethIcon';
}

export default AweethIcon;