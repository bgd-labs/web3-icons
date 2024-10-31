// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataarb } from "../../../icons/full/build/icon-stataarb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataarbIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataarb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataarbIcon.displayName = 'StataarbIcon';
}

export default StataarbIcon;