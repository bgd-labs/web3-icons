// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAstusd } from "../../../icons/full/build/icon-astusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AstusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAstusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AstusdIcon.displayName = 'AstusdIcon';
}

export default AstusdIcon;