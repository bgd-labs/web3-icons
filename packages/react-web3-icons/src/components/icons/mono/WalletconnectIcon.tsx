// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconWalletconnect } from "../../../icons/mono/build/icon-walletconnect.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const WalletconnectIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconWalletconnect.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WalletconnectIcon.displayName = 'WalletconnectIcon';
}

export default WalletconnectIcon;