// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAeth } from "../../../icons/full/build/icon-aeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AethIcon.displayName = 'AethIcon';
}

export default AethIcon;