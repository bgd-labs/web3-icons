// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSafepalwallet } from "../../../icons/full/build/icon-safepalwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const SafepalwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSafepalwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SafepalwalletIcon.displayName = 'SafepalwalletIcon';
}

export default SafepalwalletIcon;