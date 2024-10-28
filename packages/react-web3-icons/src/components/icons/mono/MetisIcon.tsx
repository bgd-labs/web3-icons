// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconMetis } from "../../../icons/mono/build/icon-metis.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const MetisIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconMetis.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MetisIcon.displayName = 'MetisIcon';
}

export default MetisIcon;