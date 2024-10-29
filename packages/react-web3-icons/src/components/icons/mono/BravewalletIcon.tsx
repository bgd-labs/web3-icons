// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBravewallet } from "../../../icons/mono/build/icon-bravewallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const BravewalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconBravewallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BravewalletIcon.displayName = 'BravewalletIcon';
}

export default BravewalletIcon;