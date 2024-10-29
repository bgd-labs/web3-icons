// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasushi } from "../../../icons/full/build/icon-statasushi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatasushiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatasushi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasushiIcon.displayName = 'StatasushiIcon';
}

export default StatasushiIcon;