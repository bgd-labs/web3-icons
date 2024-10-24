// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconYfi } from "../../../icons/full/build/icon-yfi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const YfiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconYfi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  YfiIcon.displayName = 'YfiIcon';
}

export default YfiIcon;