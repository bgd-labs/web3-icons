// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAfrax } from "../../../icons/mono/build/icon-afrax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AfraxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAfrax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AfraxIcon.displayName = 'AfraxIcon';
}

export default AfraxIcon;