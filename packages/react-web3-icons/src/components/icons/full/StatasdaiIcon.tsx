// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasdai } from "../../../icons/full/build/icon-statasdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatasdaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatasdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasdaiIcon.displayName = 'StatasdaiIcon';
}

export default StatasdaiIcon;