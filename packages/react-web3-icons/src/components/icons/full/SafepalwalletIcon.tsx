// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSafepalwallet } from "../../../icons/full/build/icon-safepalwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const SafepalwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconSafepalwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SafepalwalletIcon.displayName = 'SafepalwalletIcon';
}

export default SafepalwalletIcon;