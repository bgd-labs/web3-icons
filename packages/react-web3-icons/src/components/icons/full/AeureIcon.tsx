// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAeure } from "../../../icons/full/build/icon-aeure.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AeureIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAeure.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AeureIcon.displayName = 'AeureIcon';
}

export default AeureIcon;