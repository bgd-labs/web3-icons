// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconXsushi } from "../../../icons/mono/build/icon-xsushi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const XsushiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconXsushi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  XsushiIcon.displayName = 'XsushiIcon';
}

export default XsushiIcon;