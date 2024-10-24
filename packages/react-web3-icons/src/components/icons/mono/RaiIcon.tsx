// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconRai } from "../../../icons/mono/build/icon-rai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const RaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconRai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RaiIcon.displayName = 'RaiIcon';
}

export default RaiIcon;