// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWone } from "../../../icons/mono/build/icon-wone.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const WoneIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconWone.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WoneIcon.displayName = 'WoneIcon';
}

export default WoneIcon;