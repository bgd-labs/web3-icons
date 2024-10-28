// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconCbbtc } from "../../../icons/full/build/icon-cbbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const CbbtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconCbbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CbbtcIcon.displayName = 'CbbtcIcon';
}

export default CbbtcIcon;