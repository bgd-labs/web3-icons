// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconPhantomwallet } from "../../../icons/mono/build/icon-phantomwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const PhantomwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconPhantomwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  PhantomwalletIcon.displayName = 'PhantomwalletIcon';
}

export default PhantomwalletIcon;