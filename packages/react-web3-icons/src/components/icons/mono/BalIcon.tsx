// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconBal } from "../../../icons/mono/build/icon-bal.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const BalIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconBal.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BalIcon.displayName = 'BalIcon';
}

export default BalIcon;