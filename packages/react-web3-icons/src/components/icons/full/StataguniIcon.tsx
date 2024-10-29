// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataguni } from "../../../icons/full/build/icon-stataguni.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataguniIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataguni.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataguniIcon.displayName = 'StataguniIcon';
}

export default StataguniIcon;