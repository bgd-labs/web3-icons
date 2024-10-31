// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStmatic } from "../../../icons/full/build/icon-stmatic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StmaticIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStmatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StmaticIcon.displayName = 'StmaticIcon';
}

export default StmaticIcon;