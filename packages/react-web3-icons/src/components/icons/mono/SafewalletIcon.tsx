// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSafewallet } from "../../../icons/mono/build/icon-safewallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const SafewalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSafewallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SafewalletIcon.displayName = 'SafewalletIcon';
}

export default SafewalletIcon;