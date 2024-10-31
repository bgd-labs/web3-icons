// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSd } from "../../../icons/full/build/icon-sd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const SdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SdIcon.displayName = 'SdIcon';
}

export default SdIcon;