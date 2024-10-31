// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconOwnbitwallet } from "../../../icons/mono/build/icon-ownbitwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const OwnbitwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconOwnbitwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OwnbitwalletIcon.displayName = 'OwnbitwalletIcon';
}

export default OwnbitwalletIcon;