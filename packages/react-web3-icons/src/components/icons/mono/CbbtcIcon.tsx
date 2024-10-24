// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconCbbtc } from "../../../icons/mono/build/icon-cbbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const CbbtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconCbbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CbbtcIcon.displayName = 'CbbtcIcon';
}

export default CbbtcIcon;