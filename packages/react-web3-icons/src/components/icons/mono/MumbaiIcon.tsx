// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconMumbai } from "../../../icons/mono/build/icon-mumbai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const MumbaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconMumbai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MumbaiIcon.displayName = 'MumbaiIcon';
}

export default MumbaiIcon;