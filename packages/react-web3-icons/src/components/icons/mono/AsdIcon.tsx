// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAsd } from "../../../icons/mono/build/icon-asd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AsdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAsd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsdIcon.displayName = 'AsdIcon';
}

export default AsdIcon;