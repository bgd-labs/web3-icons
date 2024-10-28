// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAave } from "../../../icons/full/build/icon-aave.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AaveIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAave.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AaveIcon.displayName = 'AaveIcon';
}

export default AaveIcon;