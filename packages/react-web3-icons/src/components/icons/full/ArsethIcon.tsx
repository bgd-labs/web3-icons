// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconArseth } from "../../../icons/full/build/icon-arseth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ArsethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconArseth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArsethIcon.displayName = 'ArsethIcon';
}

export default ArsethIcon;