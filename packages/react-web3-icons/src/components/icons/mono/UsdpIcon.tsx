// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconUsdp } from "../../../icons/mono/build/icon-usdp.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const UsdpIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconUsdp.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UsdpIcon.displayName = 'UsdpIcon';
}

export default UsdpIcon;