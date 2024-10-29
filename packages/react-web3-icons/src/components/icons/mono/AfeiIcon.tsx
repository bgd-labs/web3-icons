// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAfei } from "../../../icons/mono/build/icon-afei.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AfeiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAfei.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AfeiIcon.displayName = 'AfeiIcon';
}

export default AfeiIcon;