// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAausd } from "../../../icons/mono/build/icon-aausd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AausdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAausd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AausdIcon.displayName = 'AausdIcon';
}

export default AausdIcon;