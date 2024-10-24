// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAweth } from "../../../icons/full/build/icon-aweth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AwethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAweth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwethIcon.displayName = 'AwethIcon';
}

export default AwethIcon;