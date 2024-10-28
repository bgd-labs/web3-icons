// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconDai } from "../../../icons/mono/build/icon-dai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const DaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconDai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  DaiIcon.displayName = 'DaiIcon';
}

export default DaiIcon;