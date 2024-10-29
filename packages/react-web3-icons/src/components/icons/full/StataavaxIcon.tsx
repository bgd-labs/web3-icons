// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataavax } from "../../../icons/full/build/icon-stataavax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataavaxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataavax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataavaxIcon.displayName = 'StataavaxIcon';
}

export default StataavaxIcon;