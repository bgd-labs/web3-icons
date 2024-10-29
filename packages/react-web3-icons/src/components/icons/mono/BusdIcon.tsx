// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBusd } from "../../../icons/mono/build/icon-busd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const BusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconBusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BusdIcon.displayName = 'BusdIcon';
}

export default BusdIcon;