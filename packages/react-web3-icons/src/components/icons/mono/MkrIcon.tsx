// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconMkr } from "../../../icons/mono/build/icon-mkr.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const MkrIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconMkr.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MkrIcon.displayName = 'MkrIcon';
}

export default MkrIcon;