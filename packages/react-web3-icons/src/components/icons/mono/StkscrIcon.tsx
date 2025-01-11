// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStkscr } from "../../../icons/mono/build/icon-stkscr.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StkscrIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStkscr.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StkscrIcon.displayName = 'StkscrIcon';
}

export default StkscrIcon;