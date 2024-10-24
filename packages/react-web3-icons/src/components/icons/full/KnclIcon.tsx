// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconKncl } from "../../../icons/full/build/icon-kncl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const KnclIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconKncl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  KnclIcon.displayName = 'KnclIcon';
}

export default KnclIcon;