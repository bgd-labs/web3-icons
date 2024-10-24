// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconArpl } from "../../../icons/mono/build/icon-arpl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ArplIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconArpl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArplIcon.displayName = 'ArplIcon';
}

export default ArplIcon;