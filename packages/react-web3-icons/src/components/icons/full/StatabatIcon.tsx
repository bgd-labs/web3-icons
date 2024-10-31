// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatabat } from "../../../icons/full/build/icon-statabat.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatabatIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatabat.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatabatIcon.displayName = 'StatabatIcon';
}

export default StatabatIcon;