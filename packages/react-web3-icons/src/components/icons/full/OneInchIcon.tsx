// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { icon1Inch } from "../../../icons/full/build/icon-1inch.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const OneInchIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={icon1Inch.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OneInchIcon.displayName = 'OneInchIcon';
}

export default OneInchIcon;