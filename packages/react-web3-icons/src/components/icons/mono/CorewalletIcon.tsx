// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconCorewallet } from "../../../icons/mono/build/icon-corewallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const CorewalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconCorewallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CorewalletIcon.displayName = 'CorewalletIcon';
}

export default CorewalletIcon;