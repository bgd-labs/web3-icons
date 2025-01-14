// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStkwbtc } from "../../../icons/full/build/icon-stkwbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StkwbtcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStkwbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StkwbtcIcon.displayName = 'StkwbtcIcon';
}

export default StkwbtcIcon;