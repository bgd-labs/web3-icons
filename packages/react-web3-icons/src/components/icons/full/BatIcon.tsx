// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBat } from "../../../icons/full/build/icon-bat.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const BatIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconBat.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BatIcon.displayName = 'BatIcon';
}

export default BatIcon;