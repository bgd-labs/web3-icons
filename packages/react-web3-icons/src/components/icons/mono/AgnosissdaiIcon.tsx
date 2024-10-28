// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAgnosissdai } from "../../../icons/mono/build/icon-agnosissdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AgnosissdaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAgnosissdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AgnosissdaiIcon.displayName = 'AgnosissdaiIcon';
}

export default AgnosissdaiIcon;