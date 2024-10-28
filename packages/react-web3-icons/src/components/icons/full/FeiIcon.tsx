// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconFei } from "../../../icons/full/build/icon-fei.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const FeiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconFei.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FeiIcon.displayName = 'FeiIcon';
}

export default FeiIcon;