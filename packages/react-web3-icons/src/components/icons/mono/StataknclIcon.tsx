// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatakncl } from "../../../icons/mono/build/icon-statakncl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataknclIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatakncl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataknclIcon.displayName = 'StataknclIcon';
}

export default StataknclIcon;