// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconUsdc } from "../../../icons/full/build/icon-usdc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const UsdcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconUsdc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UsdcIcon.displayName = 'UsdcIcon';
}

export default UsdcIcon;