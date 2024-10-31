// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBlockwallet } from "../../../icons/mono/build/icon-blockwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const BlockwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconBlockwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BlockwalletIcon.displayName = 'BlockwalletIcon';
}

export default BlockwalletIcon;