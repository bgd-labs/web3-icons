// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAarb } from "../../../icons/mono/build/icon-aarb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AarbIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAarb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AarbIcon.displayName = 'AarbIcon';
}

export default AarbIcon;