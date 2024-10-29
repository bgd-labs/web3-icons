// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { icon1Inchwallet } from "../../../icons/full/build/icon-1inchwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const OneInchwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={icon1Inchwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OneInchwalletIcon.displayName = 'OneInchwalletIcon';
}

export default OneInchwalletIcon;