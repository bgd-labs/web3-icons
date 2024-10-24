// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAbtc } from "../../../icons/mono/build/icon-abtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AbtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AbtcIcon.displayName = 'AbtcIcon';
}

export default AbtcIcon;