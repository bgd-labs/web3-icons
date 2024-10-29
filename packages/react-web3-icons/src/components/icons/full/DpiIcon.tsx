// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconDpi } from "../../../icons/full/build/icon-dpi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const DpiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconDpi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  DpiIcon.displayName = 'DpiIcon';
}

export default DpiIcon;