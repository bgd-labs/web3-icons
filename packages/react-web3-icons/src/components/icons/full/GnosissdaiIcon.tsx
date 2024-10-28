// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconGnosissdai } from "../../../icons/full/build/icon-gnosissdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const GnosissdaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconGnosissdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GnosissdaiIcon.displayName = 'GnosissdaiIcon';
}

export default GnosissdaiIcon;