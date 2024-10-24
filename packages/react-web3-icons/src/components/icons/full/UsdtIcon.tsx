// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconUsdt } from "../../../icons/full/build/icon-usdt.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const UsdtIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconUsdt.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UsdtIcon.displayName = 'UsdtIcon';
}

export default UsdtIcon;