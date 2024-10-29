// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAezeth } from "../../../icons/full/build/icon-aezeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AezethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAezeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AezethIcon.displayName = 'AezethIcon';
}

export default AezethIcon;