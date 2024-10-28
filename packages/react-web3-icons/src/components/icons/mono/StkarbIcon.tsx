// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStkarb } from "../../../icons/mono/build/icon-stkarb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StkarbIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStkarb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StkarbIcon.displayName = 'StkarbIcon';
}

export default StkarbIcon;