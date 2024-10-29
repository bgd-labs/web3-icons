// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconMkr } from "../../../icons/full/build/icon-mkr.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const MkrIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconMkr.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MkrIcon.displayName = 'MkrIcon';
}

export default MkrIcon;