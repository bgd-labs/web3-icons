// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAreth } from "../../../icons/full/build/icon-areth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ArethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAreth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArethIcon.displayName = 'ArethIcon';
}

export default ArethIcon;