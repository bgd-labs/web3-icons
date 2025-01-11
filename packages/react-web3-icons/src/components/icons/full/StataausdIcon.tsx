// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataausd } from "../../../icons/full/build/icon-stataausd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataausdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataausd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataausdIcon.displayName = 'StataausdIcon';
}

export default StataausdIcon;