// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconMai } from "../../../icons/full/build/icon-mai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const MaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconMai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MaiIcon.displayName = 'MaiIcon';
}

export default MaiIcon;