// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconUsdt } from "../../../icons/full/build/icon-usdt.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const UsdtIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconUsdt.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UsdtIcon.displayName = 'UsdtIcon';
}

export default UsdtIcon;