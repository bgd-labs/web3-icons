// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWalletio } from "../../../icons/mono/build/icon-walletio.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const WalletioIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconWalletio.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WalletioIcon.displayName = 'WalletioIcon';
}

export default WalletioIcon;