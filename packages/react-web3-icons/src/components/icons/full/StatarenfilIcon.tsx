// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatarenfil } from "../../../icons/full/build/icon-statarenfil.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatarenfilIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatarenfil.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatarenfilIcon.displayName = 'StatarenfilIcon';
}

export default StatarenfilIcon;