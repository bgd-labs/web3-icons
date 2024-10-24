// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconBitpiewallet } from "../../../icons/full/build/icon-bitpiewallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const BitpiewalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconBitpiewallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BitpiewalletIcon.displayName = 'BitpiewalletIcon';
}

export default BitpiewalletIcon;