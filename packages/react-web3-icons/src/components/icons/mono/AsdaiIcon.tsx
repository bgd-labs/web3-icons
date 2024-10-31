// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAsdai } from "../../../icons/mono/build/icon-asdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AsdaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAsdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsdaiIcon.displayName = 'AsdaiIcon';
}

export default AsdaiIcon;