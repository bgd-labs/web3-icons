// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconOkxwallet } from "../../../icons/full/build/icon-okxwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const OkxwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconOkxwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OkxwalletIcon.displayName = 'OkxwalletIcon';
}

export default OkxwalletIcon;