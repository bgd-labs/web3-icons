// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatagusd } from "../../../icons/mono/build/icon-statagusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatagusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatagusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatagusdIcon.displayName = 'StatagusdIcon';
}

export default StatagusdIcon;