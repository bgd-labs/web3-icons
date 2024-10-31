// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconDcentwallet } from "../../../icons/full/build/icon-dcentwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const DcentwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconDcentwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  DcentwalletIcon.displayName = 'DcentwalletIcon';
}

export default DcentwalletIcon;