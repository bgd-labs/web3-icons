// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconScrolltestnet } from "../../../icons/full/build/icon-scrolltestnet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ScrolltestnetIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconScrolltestnet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ScrolltestnetIcon.displayName = 'ScrolltestnetIcon';
}

export default ScrolltestnetIcon;