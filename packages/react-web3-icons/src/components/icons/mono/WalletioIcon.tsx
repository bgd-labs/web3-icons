// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWalletio } from "../../../icons/mono/build/icon-walletio.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const WalletioIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconWalletio.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WalletioIcon.displayName = 'WalletioIcon';
}

export default WalletioIcon;