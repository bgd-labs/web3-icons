// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAcbbtc } from "../../../icons/full/build/icon-acbbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AcbbtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAcbbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AcbbtcIcon.displayName = 'AcbbtcIcon';
}

export default AcbbtcIcon;