// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAcake } from "../../../icons/mono/build/icon-acake.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AcakeIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAcake.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AcakeIcon.displayName = 'AcakeIcon';
}

export default AcakeIcon;