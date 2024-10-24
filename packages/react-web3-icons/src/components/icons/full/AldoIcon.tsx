// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAldo } from "../../../icons/full/build/icon-aldo.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AldoIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAldo.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AldoIcon.displayName = 'AldoIcon';
}

export default AldoIcon;