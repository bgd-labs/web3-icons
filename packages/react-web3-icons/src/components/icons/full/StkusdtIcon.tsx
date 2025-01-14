// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStkusdt } from "../../../icons/full/build/icon-stkusdt.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StkusdtIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStkusdt.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StkusdtIcon.displayName = 'StkusdtIcon';
}

export default StkusdtIcon;