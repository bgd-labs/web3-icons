// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconFantomtestnet } from "../../../icons/mono/build/icon-fantomtestnet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const FantomtestnetIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconFantomtestnet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FantomtestnetIcon.displayName = 'FantomtestnetIcon';
}

export default FantomtestnetIcon;