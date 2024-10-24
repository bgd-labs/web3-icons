// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconXsushi } from "../../../icons/mono/build/icon-xsushi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const XsushiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconXsushi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  XsushiIcon.displayName = 'XsushiIcon';
}

export default XsushiIcon;