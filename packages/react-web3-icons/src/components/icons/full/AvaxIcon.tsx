// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAvax } from "../../../icons/full/build/icon-avax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AvaxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAvax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AvaxIcon.displayName = 'AvaxIcon';
}

export default AvaxIcon;