// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAgusd } from "../../../icons/full/build/icon-agusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AgusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAgusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AgusdIcon.displayName = 'AgusdIcon';
}

export default AgusdIcon;