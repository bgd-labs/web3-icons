// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataweeth } from "../../../icons/mono/build/icon-stataweeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataweethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataweeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataweethIcon.displayName = 'StataweethIcon';
}

export default StataweethIcon;