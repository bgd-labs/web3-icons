// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAweeth } from "../../../icons/full/build/icon-aweeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AweethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAweeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AweethIcon.displayName = 'AweethIcon';
}

export default AweethIcon;