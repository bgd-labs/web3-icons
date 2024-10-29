// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatadpi } from "../../../icons/full/build/icon-statadpi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatadpiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatadpi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatadpiIcon.displayName = 'StatadpiIcon';
}

export default StatadpiIcon;