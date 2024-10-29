// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAknc } from "../../../icons/full/build/icon-aknc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AkncIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAknc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AkncIcon.displayName = 'AkncIcon';
}

export default AkncIcon;