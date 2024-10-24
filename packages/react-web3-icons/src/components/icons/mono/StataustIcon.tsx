// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataust } from "../../../icons/mono/build/icon-stataust.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataustIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataust.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataustIcon.displayName = 'StataustIcon';
}

export default StataustIcon;