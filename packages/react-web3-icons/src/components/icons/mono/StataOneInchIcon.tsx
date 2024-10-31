// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStata1Inch } from "../../../icons/mono/build/icon-stata1inch.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataOneInchIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStata1Inch.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataOneInchIcon.displayName = 'StataOneInchIcon';
}

export default StataOneInchIcon;