// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconRai } from "../../../icons/mono/build/icon-rai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const RaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconRai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RaiIcon.displayName = 'RaiIcon';
}

export default RaiIcon;