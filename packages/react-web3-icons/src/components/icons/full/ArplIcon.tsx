// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconArpl } from "../../../icons/full/build/icon-arpl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ArplIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconArpl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArplIcon.displayName = 'ArplIcon';
}

export default ArplIcon;