// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconScroll } from "../../../icons/full/build/icon-scroll.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ScrollIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconScroll.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ScrollIcon.displayName = 'ScrollIcon';
}

export default ScrollIcon;