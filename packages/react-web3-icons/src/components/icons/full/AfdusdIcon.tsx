// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAfdusd } from "../../../icons/full/build/icon-afdusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AfdusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAfdusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AfdusdIcon.displayName = 'AfdusdIcon';
}

export default AfdusdIcon;