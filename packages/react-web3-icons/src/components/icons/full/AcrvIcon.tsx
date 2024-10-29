// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAcrv } from "../../../icons/full/build/icon-acrv.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AcrvIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAcrv.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AcrvIcon.displayName = 'AcrvIcon';
}

export default AcrvIcon;