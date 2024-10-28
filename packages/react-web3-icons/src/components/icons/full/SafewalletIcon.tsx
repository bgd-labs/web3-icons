// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSafewallet } from "../../../icons/full/build/icon-safewallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const SafewalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconSafewallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SafewalletIcon.displayName = 'SafewalletIcon';
}

export default SafewalletIcon;