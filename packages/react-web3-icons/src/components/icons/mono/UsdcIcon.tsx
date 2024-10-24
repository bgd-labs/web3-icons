// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconUsdc } from "../../../icons/mono/build/icon-usdc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const UsdcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconUsdc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UsdcIcon.displayName = 'UsdcIcon';
}

export default UsdcIcon;