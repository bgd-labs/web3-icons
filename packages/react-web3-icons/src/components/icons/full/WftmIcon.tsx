// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWftm } from "../../../icons/full/build/icon-wftm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const WftmIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconWftm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WftmIcon.displayName = 'WftmIcon';
}

export default WftmIcon;