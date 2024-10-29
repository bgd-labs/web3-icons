// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAmaticx } from "../../../icons/full/build/icon-amaticx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AmaticxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAmaticx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AmaticxIcon.displayName = 'AmaticxIcon';
}

export default AmaticxIcon;