// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAsusd } from "../../../icons/mono/build/icon-asusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AsusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAsusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsusdIcon.displayName = 'AsusdIcon';
}

export default AsusdIcon;