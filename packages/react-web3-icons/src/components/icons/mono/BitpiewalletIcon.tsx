// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBitpiewallet } from "../../../icons/mono/build/icon-bitpiewallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const BitpiewalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconBitpiewallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BitpiewalletIcon.displayName = 'BitpiewalletIcon';
}

export default BitpiewalletIcon;