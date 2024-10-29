// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatausdp } from "../../../icons/full/build/icon-statausdp.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatausdpIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatausdp.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatausdpIcon.displayName = 'StatausdpIcon';
}

export default StatausdpIcon;