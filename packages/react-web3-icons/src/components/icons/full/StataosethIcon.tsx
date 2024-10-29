// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataoseth } from "../../../icons/full/build/icon-stataoseth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataosethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataoseth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataosethIcon.displayName = 'StataosethIcon';
}

export default StataosethIcon;