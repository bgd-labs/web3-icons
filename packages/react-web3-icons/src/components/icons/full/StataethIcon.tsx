// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataeth } from "../../../icons/full/build/icon-stataeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataethIcon.displayName = 'StataethIcon';
}

export default StataethIcon;