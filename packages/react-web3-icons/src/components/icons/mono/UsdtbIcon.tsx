// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconUsdtb } from "../../../icons/mono/build/icon-usdtb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const UsdtbIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconUsdtb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UsdtbIcon.displayName = 'UsdtbIcon';
}

export default UsdtbIcon;