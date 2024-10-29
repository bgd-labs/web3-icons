// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatatribe } from "../../../icons/full/build/icon-statatribe.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatatribeIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatatribe.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatatribeIcon.displayName = 'StatatribeIcon';
}

export default StatatribeIcon;