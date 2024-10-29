// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataeure } from "../../../icons/mono/build/icon-stataeure.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataeureIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataeure.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataeureIcon.displayName = 'StataeureIcon';
}

export default StataeureIcon;