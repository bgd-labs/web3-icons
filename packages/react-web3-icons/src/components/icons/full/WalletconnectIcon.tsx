// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWalletconnect } from "../../../icons/full/build/icon-walletconnect.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const WalletconnectIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconWalletconnect.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WalletconnectIcon.displayName = 'WalletconnectIcon';
}

export default WalletconnectIcon;