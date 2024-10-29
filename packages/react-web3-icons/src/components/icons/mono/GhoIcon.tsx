// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconGho } from "../../../icons/mono/build/icon-gho.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const GhoIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconGho.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GhoIcon.displayName = 'GhoIcon';
}

export default GhoIcon;