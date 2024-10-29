// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBnbsmartchain } from "../../../icons/mono/build/icon-bnbsmartchain.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const BnbsmartchainIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconBnbsmartchain.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BnbsmartchainIcon.displayName = 'BnbsmartchainIcon';
}

export default BnbsmartchainIcon;