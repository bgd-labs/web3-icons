// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSdai } from "../../../icons/full/build/icon-sdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const SdaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SdaiIcon.displayName = 'SdaiIcon';
}

export default SdaiIcon;