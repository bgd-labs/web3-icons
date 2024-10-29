// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconGhst } from "../../../icons/full/build/icon-ghst.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const GhstIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconGhst.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GhstIcon.displayName = 'GhstIcon';
}

export default GhstIcon;