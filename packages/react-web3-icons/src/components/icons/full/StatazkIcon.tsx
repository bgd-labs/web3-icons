// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatazk } from "../../../icons/full/build/icon-statazk.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatazkIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatazk.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatazkIcon.displayName = 'StatazkIcon';
}

export default StatazkIcon;