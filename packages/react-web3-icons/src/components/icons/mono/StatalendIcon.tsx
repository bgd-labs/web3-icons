// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatalend } from "../../../icons/mono/build/icon-statalend.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatalendIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatalend.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatalendIcon.displayName = 'StatalendIcon';
}

export default StatalendIcon;