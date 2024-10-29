// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatagho } from "../../../icons/mono/build/icon-statagho.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataghoIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatagho.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataghoIcon.displayName = 'StataghoIcon';
}

export default StataghoIcon;