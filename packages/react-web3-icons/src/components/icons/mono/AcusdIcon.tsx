// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAcusd } from "../../../icons/mono/build/icon-acusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AcusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAcusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AcusdIcon.displayName = 'AcusdIcon';
}

export default AcusdIcon;