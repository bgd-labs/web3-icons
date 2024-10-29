// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAust } from "../../../icons/full/build/icon-aust.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AustIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAust.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AustIcon.displayName = 'AustIcon';
}

export default AustIcon;