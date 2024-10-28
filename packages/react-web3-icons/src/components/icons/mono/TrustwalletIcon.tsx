// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconTrustwallet } from "../../../icons/mono/build/icon-trustwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const TrustwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconTrustwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  TrustwalletIcon.displayName = 'TrustwalletIcon';
}

export default TrustwalletIcon;