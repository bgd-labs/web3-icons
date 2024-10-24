// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconOperawallet } from "../../../icons/full/build/icon-operawallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const OperawalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconOperawallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OperawalletIcon.displayName = 'OperawalletIcon';
}

export default OperawalletIcon;