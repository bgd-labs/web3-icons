// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatabusd } from "../../../icons/mono/build/icon-statabusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatabusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatabusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatabusdIcon.displayName = 'StatabusdIcon';
}

export default StatabusdIcon;