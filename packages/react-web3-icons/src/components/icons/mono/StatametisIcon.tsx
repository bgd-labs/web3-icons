// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatametis } from "../../../icons/mono/build/icon-statametis.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatametisIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatametis.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatametisIcon.displayName = 'StatametisIcon';
}

export default StatametisIcon;