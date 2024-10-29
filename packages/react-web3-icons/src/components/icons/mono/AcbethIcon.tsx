// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAcbeth } from "../../../icons/mono/build/icon-acbeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AcbethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAcbeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AcbethIcon.displayName = 'AcbethIcon';
}

export default AcbethIcon;