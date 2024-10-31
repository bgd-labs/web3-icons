// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBitskiwallet } from "../../../icons/full/build/icon-bitskiwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const BitskiwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconBitskiwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BitskiwalletIcon.displayName = 'BitskiwalletIcon';
}

export default BitskiwalletIcon;