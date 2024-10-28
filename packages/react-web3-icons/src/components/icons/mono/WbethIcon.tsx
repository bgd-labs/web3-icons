// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWbeth } from "../../../icons/mono/build/icon-wbeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const WbethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconWbeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WbethIcon.displayName = 'WbethIcon';
}

export default WbethIcon;