// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatatusd } from "../../../icons/full/build/icon-statatusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatatusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatatusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatatusdIcon.displayName = 'StatatusdIcon';
}

export default StatatusdIcon;