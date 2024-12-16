// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconScr } from "../../../icons/mono/build/icon-scr.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ScrIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconScr.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ScrIcon.displayName = 'ScrIcon';
}

export default ScrIcon;