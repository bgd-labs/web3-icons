// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStkaave } from "../../../icons/full/build/icon-stkaave.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StkaaveIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStkaave.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StkaaveIcon.displayName = 'StkaaveIcon';
}

export default StkaaveIcon;