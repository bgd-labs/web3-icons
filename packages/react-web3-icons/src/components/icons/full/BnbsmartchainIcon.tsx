// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBnbsmartchain } from "../../../icons/full/build/icon-bnbsmartchain.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const BnbsmartchainIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconBnbsmartchain.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BnbsmartchainIcon.displayName = 'BnbsmartchainIcon';
}

export default BnbsmartchainIcon;