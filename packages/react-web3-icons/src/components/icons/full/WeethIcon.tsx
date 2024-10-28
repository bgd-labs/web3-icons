// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWeeth } from "../../../icons/full/build/icon-weeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const WeethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconWeeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WeethIcon.displayName = 'WeethIcon';
}

export default WeethIcon;