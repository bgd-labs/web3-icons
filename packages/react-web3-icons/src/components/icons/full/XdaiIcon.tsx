// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconXdai } from "../../../icons/full/build/icon-xdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const XdaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconXdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  XdaiIcon.displayName = 'XdaiIcon';
}

export default XdaiIcon;