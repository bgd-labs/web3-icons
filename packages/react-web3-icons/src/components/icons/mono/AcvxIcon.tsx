// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAcvx } from "../../../icons/mono/build/icon-acvx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AcvxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAcvx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AcvxIcon.displayName = 'AcvxIcon';
}

export default AcvxIcon;