// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWbnb } from "../../../icons/full/build/icon-wbnb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const WbnbIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconWbnb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WbnbIcon.displayName = 'WbnbIcon';
}

export default WbnbIcon;