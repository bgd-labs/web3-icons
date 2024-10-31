// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataenj } from "../../../icons/mono/build/icon-stataenj.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataenjIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataenj.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataenjIcon.displayName = 'StataenjIcon';
}

export default StataenjIcon;