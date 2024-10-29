// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAusdt } from "../../../icons/full/build/icon-ausdt.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AusdtIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAusdt.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AusdtIcon.displayName = 'AusdtIcon';
}

export default AusdtIcon;