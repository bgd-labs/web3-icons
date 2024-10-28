// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconScroll } from "../../../icons/full/build/icon-scroll.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ScrollIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconScroll.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ScrollIcon.displayName = 'ScrollIcon';
}

export default ScrollIcon;