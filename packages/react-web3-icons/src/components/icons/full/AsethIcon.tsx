// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAseth } from "../../../icons/full/build/icon-aseth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AsethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAseth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsethIcon.displayName = 'AsethIcon';
}

export default AsethIcon;