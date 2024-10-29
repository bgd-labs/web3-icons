// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatabpt } from "../../../icons/full/build/icon-statabpt.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatabptIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatabpt.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatabptIcon.displayName = 'StatabptIcon';
}

export default StatabptIcon;