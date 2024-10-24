// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconUsdp } from "../../../icons/mono/build/icon-usdp.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const UsdpIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconUsdp.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UsdpIcon.displayName = 'UsdpIcon';
}

export default UsdpIcon;