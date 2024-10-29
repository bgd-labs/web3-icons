// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBpt } from "../../../icons/mono/build/icon-bpt.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const BptIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconBpt.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BptIcon.displayName = 'BptIcon';
}

export default BptIcon;