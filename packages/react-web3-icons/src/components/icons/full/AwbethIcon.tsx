// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAwbeth } from "../../../icons/full/build/icon-awbeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AwbethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAwbeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwbethIcon.displayName = 'AwbethIcon';
}

export default AwbethIcon;