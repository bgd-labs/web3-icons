// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatarep } from "../../../icons/full/build/icon-statarep.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatarepIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatarep.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatarepIcon.displayName = 'StatarepIcon';
}

export default StatarepIcon;