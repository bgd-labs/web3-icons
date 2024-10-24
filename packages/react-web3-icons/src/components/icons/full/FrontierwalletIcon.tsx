// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconFrontierwallet } from "../../../icons/full/build/icon-frontierwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const FrontierwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconFrontierwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FrontierwalletIcon.displayName = 'FrontierwalletIcon';
}

export default FrontierwalletIcon;