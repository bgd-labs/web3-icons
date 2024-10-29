// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAaave } from "../../../icons/full/build/icon-aaave.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AaaveIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAaave.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AaaveIcon.displayName = 'AaaveIcon';
}

export default AaaveIcon;