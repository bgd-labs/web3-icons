// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasavax } from "../../../icons/full/build/icon-statasavax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatasavaxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatasavax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasavaxIcon.displayName = 'StatasavaxIcon';
}

export default StatasavaxIcon;