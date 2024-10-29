// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconTokenpocketwallet } from "../../../icons/mono/build/icon-tokenpocketwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const TokenpocketwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconTokenpocketwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  TokenpocketwalletIcon.displayName = 'TokenpocketwalletIcon';
}

export default TokenpocketwalletIcon;