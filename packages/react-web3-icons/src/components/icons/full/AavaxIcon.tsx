// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAavax } from "../../../icons/full/build/icon-aavax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AavaxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAavax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AavaxIcon.displayName = 'AavaxIcon';
}

export default AavaxIcon;