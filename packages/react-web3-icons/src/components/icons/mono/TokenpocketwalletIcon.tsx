// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconTokenpocketwallet } from "../../../icons/mono/build/icon-tokenpocketwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const TokenpocketwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconTokenpocketwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  TokenpocketwalletIcon.displayName = 'TokenpocketwalletIcon';
}

export default TokenpocketwalletIcon;