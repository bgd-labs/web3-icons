// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatafrax } from "../../../icons/mono/build/icon-statafrax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatafraxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatafrax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatafraxIcon.displayName = 'StatafraxIcon';
}

export default StatafraxIcon;