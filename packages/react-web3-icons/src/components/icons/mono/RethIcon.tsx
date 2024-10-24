// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconReth } from "../../../icons/mono/build/icon-reth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const RethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconReth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RethIcon.displayName = 'RethIcon';
}

export default RethIcon;