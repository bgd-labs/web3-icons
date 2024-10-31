// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataone } from "../../../icons/full/build/icon-stataone.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataoneIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataone.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataoneIcon.displayName = 'StataoneIcon';
}

export default StataoneIcon;