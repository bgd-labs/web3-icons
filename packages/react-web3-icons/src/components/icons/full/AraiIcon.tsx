// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconArai } from "../../../icons/full/build/icon-arai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AraiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconArai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AraiIcon.displayName = 'AraiIcon';
}

export default AraiIcon;