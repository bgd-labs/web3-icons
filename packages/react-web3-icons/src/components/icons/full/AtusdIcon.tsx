// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAtusd } from "../../../icons/full/build/icon-atusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AtusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAtusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AtusdIcon.displayName = 'AtusdIcon';
}

export default AtusdIcon;