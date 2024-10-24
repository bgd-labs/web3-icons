// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconFdusd } from "../../../icons/full/build/icon-fdusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const FdusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconFdusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FdusdIcon.displayName = 'FdusdIcon';
}

export default FdusdIcon;