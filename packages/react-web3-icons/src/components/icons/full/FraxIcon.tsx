// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconFrax } from "../../../icons/full/build/icon-frax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const FraxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconFrax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FraxIcon.displayName = 'FraxIcon';
}

export default FraxIcon;