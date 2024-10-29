// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAkncl } from "../../../icons/mono/build/icon-akncl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AknclIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAkncl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AknclIcon.displayName = 'AknclIcon';
}

export default AknclIcon;