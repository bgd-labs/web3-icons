// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAmkr } from "../../../icons/full/build/icon-amkr.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AmkrIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAmkr.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AmkrIcon.displayName = 'AmkrIcon';
}

export default AmkrIcon;