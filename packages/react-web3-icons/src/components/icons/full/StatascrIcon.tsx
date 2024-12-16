// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatascr } from "../../../icons/full/build/icon-statascr.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatascrIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatascr.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatascrIcon.displayName = 'StatascrIcon';
}

export default StatascrIcon;