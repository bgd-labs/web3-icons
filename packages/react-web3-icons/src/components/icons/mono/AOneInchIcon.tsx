// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconA1Inch } from "../../../icons/mono/build/icon-a1inch.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AOneInchIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconA1Inch.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AOneInchIcon.displayName = 'AOneInchIcon';
}

export default AOneInchIcon;