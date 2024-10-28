// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBitkeepwallet } from "../../../icons/full/build/icon-bitkeepwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const BitkeepwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconBitkeepwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BitkeepwalletIcon.displayName = 'BitkeepwalletIcon';
}

export default BitkeepwalletIcon;